export default class {

    constructor({ mainApi, searchForm, mainBLock, baseComponent, newsCard, header, articlePage }) {
        this.mainApi = mainApi;
        this.searchForm = searchForm;
        this.mainBLock = mainBLock;
        this.baseComponent = baseComponent;
        this.newsCard = newsCard;
        this.header = header;
        this.articlePage = articlePage;
        this.counter = 0;
        this.pageCount = 3;
        this.contRow = 3;
        this.del = false;

        this._init();
    }

    _init = () => {
        if(localStorage.getItem('token')) {
            this.header.isLoggedIn().then((res) => {
                this.aut = true;
                this.userName = res.name;
            })
            .catch(() => {
                document.location.href= '/';
            });
        } else {
            this.aut = false;
            if(this.articlePage) {
                this.renderLoaderNo = this.baseComponent.wrapCreate(this._templateEmptyResult()).querySelector('.load');
                this.mainBLock.prepend(this.renderLoaderNo);
                document.location.href= '/';
            }
        }
    }

    renderResults = () => {
        this.articlesItems = this.articles.slice(this.counter, this.pageCount);

        if(this.hero) {
            this.hero.remove();
        }

        this.articlesItems.forEach((article) => {
            this.searchResultItems.append(this.addCard(article));
        });

        if(this.btnMore) {
            this.btnMore.remove();
        }

        this.searchResultContainer.append(this.searchResultItems);

        if (this.pageCount < this.articles.length) {
            this.btnMore = this.baseComponent.wrapCreate(this._templateshowMore()).querySelector('.button-elongated');
            this.btnMore.addEventListener('click', this._clickBtnMore);
            this.searchResultContainer.append(this.btnMore);
        }

        if(!this.hero || this.del) {
            this.mainBLock.append(this.searchResult);
            this.hero = this.baseComponent.wrapCreate(this._templateHero()).querySelector('.article-header');

            this.header.isLoggedIn().then((res) => {
                this.hero.querySelector('.article-header-title__name').textContent = res.name;
            })
            .catch(() => {
                document.location.href= '/';
            });

            this.hero.querySelector('.article-header-title__count').textContent = this.articles.length;
            this.hero.querySelector('.article-header-description').innerHTML = this._keywordTitle();
        }

        if (this.savePage) {
            this.mainBLock.prepend(this.searchResult);
            this.mainBLock.prepend(this.hero);
        } else {
            this.mainBLock.prepend(this.searchResult);
        }

        this._renderLoaderRemove();
    }

    _keywordTitle = () => {
        const articleKeywords = [];
        const articleKeywordsArray = [];
        let virgule = '';
        let keyworsCount;

        this.articles.forEach((article) => {
            if(!articleKeywords.includes(article.keyword)) {
                articleKeywords.push(article.keyword);
            }
        });

        articleKeywords.forEach((keywords, i) => {
            if (i === 0) {
                if(articleKeywords.length > 1) {
                    virgule = ',';
                }
                articleKeywordsArray.push(`<strong>${keywords}${virgule}</strong>`);
            } else if (i === 1) {
                articleKeywordsArray.push(`<strong>${keywords}</strong>`);
            }
        });

        const keyworsTitle = `По ключевым словам: ${articleKeywordsArray.join(' ')}`;

        if(articleKeywordsArray.length > 1 && (articleKeywords.length - 2) > 0) {
            keyworsCount = ` и <strong>${articleKeywords.length - 2}-м другим</strong>`;
            return keyworsTitle + keyworsCount;
        } else {
            return keyworsTitle;
        }
    }

    _clickBtnMore = () => {
        this.counter += this.contRow;
        this.pageCount = this.counter + this.contRow;
        this.renderResults();
    }

    _articlesArray = (articles) => {
        this.articles = articles;

        this.searchResult = this.baseComponent.wrapCreate(this._templateSearchResult()).querySelector('.search-result');
        this.searchResultContainer = this.searchResult.querySelector('.container');
        this.searchResultItems = this.searchResult.querySelector('.search-result-items');
    }

    searchNews = (event, save = false) => {
        this.savePage = save;
        if(this.savePage) {
            this.mainApi.getSaveArticle().then((res) => {
                if(res.data.length) {
                    this._articlesArray(res.data);
                    this.renderResults();
                } else {
                    this._renderLoaderRemove();
                    this.renderLoader(false);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            event.preventDefault();
            const inputText = this.searchForm.querySelector('.header-search__input');
            this.textQuery = inputText.value;

            this.counter = 0;
            this.pageCount = 3;

            this._removeResultItems();
            this._renderLoaderRemove();
            this.renderLoader(true);

            if(inputText.value) {
                this.mainApi.getArticles(inputText.value).then((res) => {
                    if(res.length) {
                        this._articlesArray(res);
                        this.renderResults();
                    } else {
                        this._renderLoaderRemove();
                        this.renderLoader(false);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                this._renderLoaderRemove();
                this.renderLoader(false);
            }
        }
    }

    renderLoader = (emptyResult) => {
        if(emptyResult) {
            this.renderLoaderOk = this.baseComponent.wrapCreate(this._templateLoader()).querySelector('.load');
            this.mainBLock.prepend(this.renderLoaderOk);
        } else {
            this.renderLoaderNo = this.baseComponent.wrapCreate(this._templateEmptyResult()).querySelector('.load');
            this.mainBLock.prepend(this.renderLoaderNo);
        }
    }

    _templateLoader = () => {
        return `<div class="load">
          <div class="load__img"></div>
          <div class="load__title">Идет поиск новостей...</div>
        </div>`;
    }

    _templateEmptyResult = () => {
        return `<div class="load">
          <div class="load__img-not-search"></div>
          <div class="load__title-not-search">Ничего не найдено</div>
          <div class="load__title">К сожалению по вашему запросу ничего не найдено.</div>
        </div>`;
    }

    _templateshowMore = () => {
        return `<button class="button-elongated button-elongated_white-fon button-elongated_white-fon_search-result-items" type="submit">
          Показать еще
        </button>`;
    }

    _templateSearchResult = () => {
        return `<section class="search-result">
          <div class="container">
            <h2 class="search-result__title title-h2">Результаты поиска</h2>
            <div class="search-result-items"></div>
          </div>
        </section>`;
    }

    _templateCart = () => {
        return `<article class="search-result-cart">
            <picture class="search-result-cart__picture">
              <img src="" alt="" class="search-result-cart__image">
            </picture>
            <time class="search-result-cart__date" datetime=""></time>
            <a target="_blank" href="" class="search-result-cart__name title-h3"></a>
            <p class="search-result-cart__preview"></p>
            <cite class="search-result-cart__site"></cite>
          </article>`;
    }

    _templateHero = () => {
        return `<div class="article-header container">
            <p class="article-header-save">Сохранённые статьи</p>
            <h1 class="article-header-title"><span class="article-header-title__name"></span>, у вас <span class="article-header-title__count">5</span> сохранённых статей</h1>
            <p class="article-header-description"></p>
        </div>`;
    }

    // принимает экземпляр карточки и добавляет её в список.
    addCard = (article) => {
        this.articleCart = this.baseComponent.wrapCreate(this._templateCart()).querySelector('.search-result-cart');

        this.articleCart.prepend(this.newsCard.renderIcon(this.savePage));
        this.btnFavourites = this.articleCart.querySelector('.button-mark');

            this.btnFavourites.addEventListener('click', (event) => {
                let target = event.target;
                if(!target.classList.contains('search-result-cart__favourites')) {
                    target = target.closest('.search-result-cart__favourites');
                }

                if(this.savePage) {
                    this._deleteArticle(target);
                } else {
                    if(this.aut) {
                        this._addArticle(target, article);
                    }
                }
            });


        if (this.savePage) {
            this.articleCart.dataset.id = article._id;

            if(this.savePage) {
                this.articleCart.insertAdjacentHTML('afterbegin', `<div class="search-result-cart__catid">${article.keyword}</div>`);
            }

            this.articleCart.querySelector('.search-result-cart__name').textContent = article.title;
            this.articleCart.querySelector('.search-result-cart__name').setAttribute('href', article.link);
            this.articleCart.querySelector('.search-result-cart__preview').textContent = article.text;
            this.articleCart.querySelector('.search-result-cart__site').textContent = article.source;
            this.articleCart.querySelector('.search-result-cart__date').textContent = article.date;
            if (article.image) {
                this.articleCart.querySelector('.search-result-cart__image').setAttribute('src', article.image);
            }

            this.articleCart.querySelector('.search-result-cart__image').setAttribute('alt', article.title);
        } else {
            this.articleCart.querySelector('.search-result-cart__name').textContent = article.title;
            this.articleCart.querySelector('.search-result-cart__name').setAttribute('href', article.url);
            this.articleCart.querySelector('.search-result-cart__preview').textContent = article.description;
            this.articleCart.querySelector('.search-result-cart__site').textContent = article.source.name;
            this.articleCart.querySelector('.search-result-cart__date').textContent = this.baseComponent.dateFormat(article.publishedAt);
            this.articleCart.querySelector('.search-result-cart__date').setAttribute('datetime', article.publishedAt);
            if (article.urlToImage) {
                this.articleCart.querySelector('.search-result-cart__image').setAttribute('src', article.urlToImage);
            }

            this.articleCart.querySelector('.search-result-cart__image').setAttribute('alt', article.title);
        }

        return this.articleCart;
    }

    _deleteArticle = (btn) => {
        const card = btn.closest('.search-result-cart');
        this.del = true;
        this.mainApi.deleteArticle(card.dataset.id)
            .then((res) => {
                card.remove();
                this.searchResult.remove();
                this.hero.remove();
                this.counter = 0;
                this.pageCount = 3;
                this._removeResultItems();
                this.searchNews(false, true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _addArticle = (card, data) => {
        const dataBD = {
            "keyword": this.textQuery,
            "title": data.title,
            "text": data.description,
            "date": this.baseComponent.dateFormat(data.publishedAt),
            "source": data.source.name,
            "link": data.url,
            "image": data.urlToImage
        }

        this.mainApi.createArticle(dataBD)
            .then(() => {
                card.classList.add('search-result-cart__favourites_is_active');
                card.dataset.msg = 'Статья сохранена';
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _renderLoaderRemove = () => {
        if(this.renderLoaderOk) {
            this.renderLoaderOk.remove();
        }

        if(this.renderLoaderNo) {
            this.renderLoaderNo.remove();
        }
    }

    _removeResultItems = () => {
        if (this.searchResult) {
            this.searchResult.remove();
        }
    }
}
