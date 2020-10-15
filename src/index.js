import "./main.css";
import constCommon from "./js/constants/common";
import constError from "./js/constants/errorsMess";
import constHeader from "./js/constants/header";
import constErrorForm from "./js/constants/errorForm";
import BaseComponent from "./js/components/BaseComponent";
import MainApi from "./js/api/MainApi";
import Header from "./js/components/Header";
import Popup from "./js/components/Popup";
import Form from "./js/components/Form";
import NewsCardList from "./js/components/NewsCardList";
import NewsCard from "./js/components/NewsCard";

(function () {
    const baseComponent = new BaseComponent();

    const mainApi = new MainApi({
        urlServerRest: constCommon.URL_SERVER_REST,
        headerConfig: constHeader.HEADER,
        newsapiKey: constCommon.NEWSAPI_KEY
    });

    const form = new Form({
        mainApi,
        errorMess: constErrorForm,
        body: constCommon.BODY
    });

    const popup = new Popup({
        formClass: form,
        body: constCommon.BODY,
        baseComponent
    });

    const header = new Header({
        wrapBtnLogin: constCommon.HEADER_WRAP_BTN_LOGIN,
        baseComponent,
        body: constCommon.BODY,
        headerTheme: constCommon.HEADER_THEME,
        popup: popup,
        mainApi: mainApi,
        articlePage: constCommon.ARTICLE_PAGE,
        menuTop: constCommon.MENU_TOP
    });

    const newsCard = new NewsCard({ baseComponent });

    const newsCardList = new NewsCardList({
        mainApi,
        searchForm: constCommon.SEARCH_FORM,
        mainBLock: constCommon.MAIN_BLOCK,
        baseComponent,
        newsCard: newsCard,
        header,
        articlePage: constCommon.ARTICLE_PAGE
    });

    header.preloaderLoad();

    if(localStorage.getItem('token')) {
        header.isLoggedIn().then((res) => {
            header.preloaderRemove();
            res.name ? header.viewBtnUser(res.name) : header.viewBtnLogin();
        })
        .catch(() => {
            header.preloaderRemove();
            header.viewBtnLogin();
        });
    } else {
        header.preloaderRemove();
        header.viewBtnLogin();
    }

    if(constCommon.SEARCH_FORM) {
        constCommon.SEARCH_FORM.addEventListener('submit', (event) => {
            newsCardList.searchNews(event);
        });
    }

    if(constCommon.ARTICLE_PAGE) {
        newsCardList.searchNews(false, true);
    }
})();
