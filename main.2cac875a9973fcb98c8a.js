!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports={PRELOADER:document.querySelector(".circle-preloader"),URL_SERVER_REST:"https://api.praktikum-qwelp.ru",BTN_OPEN_POPUP_LOGIN_FORM:document.querySelector(".popup-login-open"),BODY:document.querySelector("body")}},function(e,t){e.exports={USER_EMAIL_EXISTS:"Такой email уже существует",USER_NOT_VALID_PARAM:"Неправильный формат данных"}},function(e,t){e.exports={HEADER:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}}},function(e,t){e.exports={VALUE_MISSING:"Это обязательное поле",TOO_SHORT:"Должно быть от 2 до 30 символов",TOO_SHORT_PASSWORD:"Должно быть от 8 до 30 символов",TYPE_MISAMTCH:"Здесь должна быть ссылка",USER_OCCUPIED:"Такой пользователь уже есть",EMAIL_ERROR:"Неправильный формат email"}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(4);var n=r(0),o=r.n(n),s=(r(1),r(2)),p=r.n(s),i=r(3),a=r.n(i);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function e(t){var r=this,n=t.urlServerRest,o=t.headerConfig;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"getUserData",(function(){return fetch("".concat(r.urlServerRest,"/users/me"),{method:"GET",headers:r.headerConfig}).then((function(e){return r._getResponseData(e)})).catch((function(e){return r._getResponseError(e)}))})),u(this,"signup",(function(e){return fetch("".concat(r.urlServerRest,"/signup"),{method:"POST",headers:r.headerConfig,body:JSON.stringify(e)}).then((function(e){return r._getResponseData(e)})).catch((function(e){return r._getResponseError(e)}))})),u(this,"signin",(function(e){return fetch("".concat(r.urlServerRest,"/signin"),{method:"POST",headers:r.headerConfig,body:JSON.stringify(e)}).then((function(e){return r._getResponseData(e)})).catch((function(e){return r._getResponseError(e)}))})),u(this,"_getResponseData",(function(e){return e.ok?e.json():Promise.reject(e)})),u(this,"_getResponseError",(function(e){return Promise.reject(e)})),this.urlServerRest=n,this.headerConfig=o};function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var _=function(){function e(t){var r=t.preloader;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.preloader=r,this._init()}var t,r,n;return t=e,(r=[{key:"_init",value:function(){this._addListeners()}},{key:"_addListeners",value:function(){document.addEventListener("DOMContentLoaded",this.preloader.remove())}}])&&c(t.prototype,r),n&&c(t,n),e}();function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(){function e(t){var r=this,n=t.formClass,o=t.body;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_wrapCreate",(function(e){var t=document.createElement("div");return t.insertAdjacentHTML("beforeend",e),t})),f(this,"_popupBlock",(function(){return'<div class="popup">\n              <div class="popup__wrap">\n                <button class="button-close popup__close">\n                  <svg class="button-close__icon popup__close-icon">\n                    <use xlink:href="#close"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>'})),f(this,"_loginBlock",(function(){return'<h2 class="popup__title">Вход</h2>\n            <form data-type="login" class="popup__form">\n              <div class="popup__row">\n                <label for="login-email" class="popup__label">Email</label>\n                <input data-rest="email" type="email" name="login-email" id="login-email" pattern="[a-z0-9-.]+@[a-z0-9-]+\\.[a-z]+(.[a-z]+)?" required class="popup__input" placeholder="example@test.com">\n                <p class="popup__error" id="error-login-email">Неправильный формат email</p>\n              </div>\n              <div class="popup__row">\n                <label for="login-password" class="popup__label">Пароль</label>\n                <input data-rest="password" type="password" name="login-password" required id="login-password" class="popup__input" placeholder="••••••••••••" minlength="8" maxlength="30">\n                <p class="popup__error" id="error-login-password">Неправильный пароль</p>\n              </div>\n              <div class="popup__row">\n                <p class="popup__error text-center" id="error-server"></p>\n            </div>\n              <button class="button-submit popup__submit" disabled type="submit">Войти</button>\n            </form>\n            <p class="popup__reg">\n              или <button class="popup__reg-button popup-reg-popup-open">Зарегистрироваться</button>\n            </p>'})),f(this,"_regBlock",(function(){return'<h2 class="popup__title">Регистрация</h2>\n          <form data-type="reg" class="popup__form">\n            <div class="popup__row">\n              <label for="reg-email" class="popup__label">Email</label>\n              <input data-rest="email" type="email" name="reg-email" id="reg-email" pattern="[a-z0-9-.]+@[a-z0-9-]+\\.[a-z]+(.[a-z]+)?" required class="popup__input" placeholder="example@test.com">\n              <p class="popup__error" id="error-reg-email">Неправильный формат email</p>\n            </div>\n            <div class="popup__row">\n              <label for="reg-password" class="popup__label">Пароль</label>\n              <input data-rest="password" type="password" name="reg-password" id="reg-password" required class="popup__input" placeholder="Введите пароль" minlength="8" maxlength="30">\n              <p class="popup__error" id="error-reg-password"></p>\n            </div>\n            <div class="popup__row">\n              <label for="reg-name" class="popup__label">Имя</label>\n              <input data-rest="name" type="text" name="reg-name" id="reg-name" required class="popup__input" placeholder="Введите своё имя" minlength="2" maxlength="30">\n              <p class="popup__error" id="error-reg-name"></p>\n            </div>\n            <div class="popup__row">\n                <p class="popup__error text-center" id="error-server"></p>\n            </div>\n            <button class="button-submit popup__submit" disabled type="submit">Зарегистрироваться</button>\n          </form>\n          <p class="popup__reg">\n            или <button class="popup__reg-button open-login-form popup-login-popup-open">Войти</button>\n          </p>'})),f(this,"_regOkBlock",(function(){return'<form data-type="reg-ok" class="popup__form">\n            <p class="popup__step-two__text">Пользователь успешно зарегистрирован!</p>\n            <button href="#" class="popup__reg-button popup__step-two__button popup-login-popup-open">Войти</button>\n        </form>'})),f(this,"close",(function(){r._popup.remove(),r._removeListeners()})),f(this,"open",(function(e){var t;r._popup&&r.close(),"login"===e?t=r._loginBlock():"reg"===e?t=r._regBlock():"reg-ok"===e&&(t=r._regOkBlock()),r.setContent(t)})),f(this,"_openSetContent",(function(e){var t=e.target;t.classList.contains("popup-reg-popup-open")?r.open("reg"):t.classList.contains("popup-login-popup-open")&&r.open("login")})),f(this,"_closeClickWrap",(function(e){var t=e.target;(!t.closest(".popup__wrap")||t.classList.contains(".popup__close")||t.closest(".popup__close"))&&r.close()})),f(this,"_pressEscape",(function(e){"Escape"===e.key&&r.close()})),f(this,"_addListeners",(function(){r._popup.addEventListener("click",r._closeClickWrap),document.addEventListener("keydown",r._pressEscape),r._btnOpenLogin&&r._btnOpenLogin.addEventListener("click",r._openSetContent),r._btnOpenReg&&r._btnOpenReg.addEventListener("click",r._openSetContent)})),f(this,"_removeListeners",(function(){r._popup.removeEventListener("click",r._closeClickWrap),document.removeEventListener("keydown",r._pressEscape),r._btnOpenLogin&&r._btnOpenLogin.removeEventListener("click",r._openSetContent),r._btnOpenReg&&r._btnOpenReg.removeEventListener("click",r._openSetContent)})),this.formClass=n,this.body=o}var t,r,n;return t=e,(r=[{key:"setContent",value:function(e){this._popup=this._wrapCreate(this._popupBlock()).querySelector(".popup"),this._popup.querySelector(".popup__close").insertAdjacentHTML("afterend",e),this._btnOpenLogin=this._popup.querySelector(".popup-login-popup-open"),this._btnOpenReg=this._popup.querySelector(".popup-reg-popup-open"),this.body.append(this._popup),this.formClass.init({popup:this}),this._addListeners()}},{key:"clearContent",value:function(){this._popup.querySelector(".popup").remove()}}])&&d(t.prototype,r),n&&d(t,n),e}();function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(){function e(t){var r=this,n=t.mainApi,o=t.errorMess,s=t.body;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"setServerError",(function(e){r._errorServerMessage=r.form.querySelector("#error-server"),"login"===r.form.dataset.type&&r.mainApi.signin(e).then((function(e){console.log(e)})).catch((function(e){r._errorServerMessage.textContent="Неправильные почта или пароль!",r._errorServerMessage.classList.add("popup__error_is_active")})),"reg"===r.form.dataset.type&&r.mainApi.signup(e).then((function(e){e._id&&(r.popup.close(),r.popup.open("reg-ok"),r._removeListeners())})).catch((function(e){409===e.status?(r._errorServerMessage.textContent="Такой пользователь существует!",r._errorServerMessage.classList.add("popup__error_is_active")):400===e.status&&(r._errorServerMessage.textContent="Не правильный формат данных!",r._errorServerMessage.classList.add("popup__error_is_active"))}))})),h(this,"_validateInputElement",(function(e){var t=r.form.querySelector("#error-".concat(e.name));return r._errorServerMessage&&r._errorServerMessage.classList.remove("popup__error_is_active"),e.validity.tooShort||e.validity.tooLong?("password"===e.type?t.textContent=r.errorMess.TOO_SHORT_PASSWORD:t.textContent=r.errorMess.TOO_SHORT,r._checkInputValidity(t,!1),!1):"email"===e.type&&e.validity.patternMismatch?(t.textContent=r.errorMess.EMAIL_ERROR,r._checkInputValidity(t,!1),!1):(t.textContent="",r._checkInputValidity(t),!0)})),h(this,"_checkInputValidity",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?e.classList.remove("popup__error_is_active"):e.classList.add("popup__error_is_active")})),h(this,"_validateForm",(function(){var e=r._inputs.some((function(e){return""===e.value}));if(r._inputs.forEach((function(e){return r._validateInputElement(e)})),!e){var t=!r._inputs.some((function(e){return!r._validateInputElement(e)}));r._submit.disabled=!t}})),h(this,"_setEventListeners",(function(){r.form.addEventListener("input",(function(){r._validateForm()}))})),h(this,"_sendForm",(function(e){e.preventDefault(),r._errorServerMessage&&r._errorServerMessage.classList.remove("popup__error_is_active");var t=r._inputs.reduce((function(e,t){return e[t.dataset.rest]=t.value,e}),{});r.setServerError(t)})),h(this,"_addListeners",(function(){r.form.addEventListener("submit",r._sendForm)})),h(this,"_removeListeners",(function(){r.form.removeEventListener("submit",r._sendForm)})),h(this,"_clear",(function(){r.form.reset()})),h(this,"_getInfo",(function(){return r._inputs.reduce((function(e,t){return e[t.name]=t.value,e}),{})})),this.mainApi=n,this.errorMess=o,this.body=s}var t,r,n;return t=e,(r=[{key:"init",value:function(e){var t=e.popup;this.popup=t,this.form=this.popup._popup.querySelector("form"),this._inputs=Array.from(this.form.querySelectorAll("input")),this._submit=this.form.querySelector('[type="submit"]'),this._errorElements=Array.from(this.form.querySelectorAll(".popup__error")),this._setEventListeners(),this._addListeners()}}])&&v(t.prototype,r),n&&v(t,n),e}();!function(){new _({preloader:o.a.PRELOADER});var e=new l({urlServerRest:o.a.URL_SERVER_REST,headerConfig:p.a.HEADER}),t=new g({mainApi:e,errorMess:a.a,body:o.a.BODY}),r=new m({formClass:t,body:o.a.BODY});e.getUserData().then((function(e){console.log(e)})),o.a.BTN_OPEN_POPUP_LOGIN_FORM.addEventListener("click",(function(){return r.open("login")}))}()}]);