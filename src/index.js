import "./main.css";
import constCommon from "./js/constants/common";
import constError from "./js/constants/errorsMess";
import constHeader from "./js/constants/header";
import constErrorForm from "./js/constants/errorForm";
import MainApi from "./js/api/MainApi";
import Header from "./js/components/Header";
import Popup from "./js/components/Popup";
import Form from "./js/components/Form";

(function () {
    const header = new Header({ preloader: constCommon.PRELOADER });
    const mainApi = new MainApi({
        urlServerRest: constCommon.URL_SERVER_REST,
        headerConfig: constHeader.HEADER
    });
    const form = new Form({
        mainApi,
        errorMess: constErrorForm,
        body: constCommon.BODY
    });
    const popup = new Popup({
        formClass: form,
        body: constCommon.BODY
    });

    mainApi.getUserData()
        .then((res) => {
           console.log(res);
        });

    constCommon.BTN_OPEN_POPUP_LOGIN_FORM.addEventListener('click', () => popup.open('login'));
})();

/*(function () {
    // Button mobile menu
    const circlePreloader = document.querySelector('.circle-preloader');
    const mobileButtonMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerTopRight = document.querySelector('.header-top-right');
    const headerTop = document.querySelector('.header-top');
    const body = document.querySelector('body');
    const autButton = document.querySelector('.button-elongated-white_header_registration');
    const autForm = document.querySelector('#aut-form');
    const buttonOpenRegForm = document.querySelector('#open-reg-form');
    const buttonOpenLoginForm = Array.from(document.querySelectorAll('.open-login-form'));
    const regForm = document.querySelector('#reg-form');
    const popup = Array.from(document.querySelectorAll('.popup'));

    document.addEventListener("DOMContentLoaded", () => {
        circlePreloader.remove();
    });

    buttonOpenLoginForm.forEach((item) => {
        item.addEventListener('click', () => {
            autForm.classList.add('popup_is_active');
            regForm.classList.remove('popup_is_active');
        });
    });

    buttonOpenRegForm.addEventListener('click', () => {
        autForm.classList.remove('popup_is_active');
        regForm.classList.add('popup_is_active');
    });

    // Toggle mobile menu
    mobileButtonMenuToggle.addEventListener('click', () => {
        if (mobileButtonMenuToggle.classList.contains('mobile-menu-toggle_is_active')) {
            autForm.classList.remove('popup_is_active');
            mobileButtonMenuToggle.classList.remove('mobile-menu-toggle_is_active');
        } else {
            headerTop.classList.toggle('header-top_mobile_is_active');
            body.classList.toggle('overflow-hidden');
        }
    });
    // Click fon mobile menu
    headerTopRight.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.closest('.header-top-right__wrap') && headerTop.classList.contains('header-top_mobile_is_active')) {
            headerTop.classList.toggle('header-top_mobile_is_active');
            body.classList.toggle('overflow-hidden');
        }
    });

    autButton.addEventListener('click', () => {
        headerTop.classList.toggle('header-top_mobile_is_active');
        body.classList.toggle('overflow-hidden');
        autForm.classList.add('popup_is_active');
        mobileButtonMenuToggle.classList.add('mobile-menu-toggle_is_active');
    });

    popup.forEach((item) => {
        item.addEventListener('click', (event) => {
            const target = event.target;
            if (
                !target.closest('.popup__wrap')
                || target.classList.contains('.popup__close')
                || target.closest('.popup__close')
            ) {
                autForm.classList.remove('popup_is_active');
                regForm.classList.remove('popup_is_active');
                body.classList.toggle('overflow-hidden');
                mobileButtonMenuToggle.classList.remove('mobile-menu-toggle_is_active');
            }
        });
    });
})();*/
