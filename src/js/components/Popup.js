export default class {

    constructor({ formClass, body }) {
        this.formClass = formClass;
        this.body = body;
    }

    setContent(popupHtml) {
        this._popup = this._wrapCreate(this._popupBlock()).querySelector('.popup');
        this._popup.querySelector('.popup__close').insertAdjacentHTML('afterend', popupHtml);
        this._btnOpenLogin = this._popup.querySelector('.popup-login-popup-open');
        this._btnOpenReg = this._popup.querySelector('.popup-reg-popup-open');
        this.body.append(this._popup);

        this.formClass.init({ popup: this });

        this._addListeners();
    }

    _wrapCreate = html => {
        const popupWrap = document.createElement('div');
        popupWrap.insertAdjacentHTML('beforeend', html);

        return popupWrap;
    }

    _popupBlock = () => {
        return `<div class="popup">
              <div class="popup__wrap">
                <button class="button-close popup__close">
                  <svg class="button-close__icon popup__close-icon">
                    <use xlink:href="#close"></use>
                  </svg>
                </button>
              </div>
            </div>`;
    }

    _loginBlock = () => {
        return `<h2 class="popup__title">Вход</h2>
            <form data-type="login" class="popup__form">
              <div class="popup__row">
                <label for="login-email" class="popup__label">Email</label>
                <input data-rest="email" type="email" name="login-email" id="login-email" pattern="[a-z0-9-.]+@[a-z0-9-]+\\.[a-z]+(.[a-z]+)?" required class="popup__input" placeholder="example@test.com">
                <p class="popup__error" id="error-login-email">Неправильный формат email</p>
              </div>
              <div class="popup__row">
                <label for="login-password" class="popup__label">Пароль</label>
                <input data-rest="password" type="password" name="login-password" required id="login-password" class="popup__input" placeholder="••••••••••••" minlength="8" maxlength="30">
                <p class="popup__error" id="error-login-password">Неправильный пароль</p>
              </div>
              <div class="popup__row">
                <p class="popup__error text-center" id="error-server"></p>
            </div>
              <button class="button-submit popup__submit" disabled type="submit">Войти</button>
            </form>
            <p class="popup__reg">
              или <button class="popup__reg-button popup-reg-popup-open">Зарегистрироваться</button>
            </p>`;
    }

    _regBlock = () => {
        return `<h2 class="popup__title">Регистрация</h2>
          <form data-type="reg" class="popup__form">
            <div class="popup__row">
              <label for="reg-email" class="popup__label">Email</label>
              <input data-rest="email" type="email" name="reg-email" id="reg-email" pattern="[a-z0-9-.]+@[a-z0-9-]+\\.[a-z]+(.[a-z]+)?" required class="popup__input" placeholder="example@test.com">
              <p class="popup__error" id="error-reg-email">Неправильный формат email</p>
            </div>
            <div class="popup__row">
              <label for="reg-password" class="popup__label">Пароль</label>
              <input data-rest="password" type="password" name="reg-password" id="reg-password" required class="popup__input" placeholder="Введите пароль" minlength="8" maxlength="30">
              <p class="popup__error" id="error-reg-password"></p>
            </div>
            <div class="popup__row">
              <label for="reg-name" class="popup__label">Имя</label>
              <input data-rest="name" type="text" name="reg-name" id="reg-name" required class="popup__input" placeholder="Введите своё имя" minlength="2" maxlength="30">
              <p class="popup__error" id="error-reg-name"></p>
            </div>
            <div class="popup__row">
                <p class="popup__error text-center" id="error-server"></p>
            </div>
            <button class="button-submit popup__submit" disabled type="submit">Зарегистрироваться</button>
          </form>
          <p class="popup__reg">
            или <button class="popup__reg-button open-login-form popup-login-popup-open">Войти</button>
          </p>`;
    }

    _regOkBlock = () => {
        return `<form data-type="reg-ok" class="popup__form">
            <p class="popup__step-two__text">Пользователь успешно зарегистрирован!</p>
            <button href="#" class="popup__reg-button popup__step-two__button popup-login-popup-open">Войти</button>
        </form>`;
    }

    close = () => {
        this._popup.remove();
        this._removeListeners();
    }

    open = (type) => {
        let popupHtml;

        if(this._popup) {
            this.close();
        }

        if(type === 'login') {
            popupHtml = this._loginBlock();
        } else if(type === 'reg') {
            popupHtml = this._regBlock();
        } else if(type === 'reg-ok') {
            popupHtml = this._regOkBlock();
        }

        this.setContent(popupHtml);
    }

    clearContent () {
        this._popup.querySelector('.popup').remove();
    }

    _openSetContent = event => {
        const target = event.target;

        if (target.classList.contains('popup-reg-popup-open')) {
            this.open('reg')
        } else if (target.classList.contains('popup-login-popup-open')) {
            this.open('login')
        }
    }

    _closeClickWrap = event => {
        const target = event.target;

        if(!target.closest('.popup__wrap') || target.classList.contains('.popup__close')
            || target.closest('.popup__close')) {
            this.close();
        }
    }

    _pressEscape = event => {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    _addListeners = () => {
        this._popup.addEventListener('click', this._closeClickWrap);
        document.addEventListener('keydown', this._pressEscape);

        if(this._btnOpenLogin) {
            this._btnOpenLogin.addEventListener('click', this._openSetContent);
        }

        if(this._btnOpenReg) {
            this._btnOpenReg.addEventListener('click', this._openSetContent);
        }
    }

    _removeListeners = () => {
        this._popup.removeEventListener('click', this._closeClickWrap);
        document.removeEventListener('keydown', this._pressEscape);

        if(this._btnOpenLogin) {
            this._btnOpenLogin.removeEventListener('click', this._openSetContent);
        }

        if(this._btnOpenReg) {
            this._btnOpenReg.removeEventListener('click', this._openSetContent);
        }
    }
}
