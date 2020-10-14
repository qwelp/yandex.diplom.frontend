export default class {

    constructor({ wrapBtnLogin, baseComponent, body, headerTheme, popup, mainApi, articlePage }) {
        this.wrapBtnLogin = wrapBtnLogin;
        this.baseComponent = baseComponent;
        this.body = body;
        this.headerTheme = headerTheme;
        this.popup = popup;
        this.mainApi = mainApi;
        this.articlePage = articlePage;
    }

    isLoggedIn = () => this.mainApi.getUserData(localStorage.getItem('token'));

    viewBtnLogin = () => {
        this.btnLoginHtml = this.baseComponent.wrapCreate(this._templateBtnLogin()).querySelector('.button-elongated');
        if (this.articlePage) {
            this.btnLoginHtml.classList.add('button-elongated_theme_white');
        }
        this.btnLoginHtml.addEventListener('click', () => this.popup.open('login'));
        this.wrapBtnLogin.append(this.btnLoginHtml);
    }

    viewBtnUser = userName => {
        this.btnLoginHtml = this.baseComponent.wrapCreate(this._templateBtnUser()).querySelector('.button-elongated');
        this.btnLoginHtml.prepend(userName);
        this.btnLoginHtml.addEventListener('click', this._logout);
        this.wrapBtnLogin.append(this.btnLoginHtml);
    }

    preloaderLoad = () => {
        this.preloaderHtml = this.baseComponent.wrapCreate(this._templatePreloaderLoad()).querySelector('.circle-preloader');
        this.body.append(this.preloaderHtml);
    }

    preloaderRemove = () => {
        this.preloaderHtml.remove();
    }

    _logout = () => {
        localStorage.removeItem('token');
        document.location.href = '/';
    }

    _templatePreloaderLoad = () => {
        return `<div class="circle-preloader">
            <div class="circle-preloader__wrap"></div>
        </div>`;
    }

    _templateBtnLogin = () => {
        return `<button class="button-elongated button-elongated_white button-elongated-white_header_registration popup-login-open">
                Авторизоваться
            </button>`;
    }

    _templateBtnUser = () => {
        let classTheme;

        if(this.headerTheme) {
            classTheme = 'button-elongated_theme_white';
        } else {
            classTheme = 'button-elongated_theme_black';
        }

        return `<button class="button-elongated button-elongated_white ${classTheme}">
            <svg class="button-elongated__logout">
                <use xlink:href="#logout"></use>
            </svg>
        </button>`;
    }
}
