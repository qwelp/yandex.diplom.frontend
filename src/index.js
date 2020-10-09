import "./main.css"
/*import constantsCommon from "./js/constants/common"
import BaseComponent from "./js/components/BaseComponent"
import Header from "./js/components/Header"
import MainApi from "./js/api/MainApi"

(function () {
    const header = new Header({
        preloader: constantsCommon.CIRCLE_PRELOADER
    });

    const mainApi = new MainApi({
        urlRestServer: constantsCommon.URL_REST_SERVER
    });

    const data = {
        "name": "qwelp",
        "email": "qwelp@mail.ru",
        "password": "!!!dl032nh"
    };

    mainApi.signup(data)
        .then((res) => {
            console.log('res', res);
        })
        .catch((err) => console.log(err));
})();*/

(function () {
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
})();
