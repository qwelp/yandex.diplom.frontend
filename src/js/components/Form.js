import constError from "../constants/errorsMess";

export default class {

    constructor({ mainApi, errorMess, body }) {
        this.mainApi = mainApi;
        this.errorMess = errorMess;
        this.body = body;
    }

    init({ popup }) {
        this.popup = popup;

        this.form = this.popup._popup.querySelector('form');
        this._inputs = Array.from(this.form.querySelectorAll('input'));
        this._submit = this.form.querySelector('[type="submit"]');
        this._errorElements = Array.from(this.form.querySelectorAll('.popup__error'));

        this._setEventListeners();
        this._addListeners();
    }

    // добавляет форме ошибку, пришедшую с сервера;
    setServerError = data => {
        this._errorServerMessage = this.form.querySelector('#error-server');

        if(this.form.dataset.type === 'login') {
            this.mainApi.signin(data)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    this._errorServerMessage.textContent = 'Неправильные почта или пароль!';
                    this._errorServerMessage.classList.add('popup__error_is_active');
                });
        }

        if(this.form.dataset.type === 'reg') {
            this.mainApi.signup(data)
                .then((res) => {
                    if(res._id) {
                        this.popup.close();
                        this.popup.open('reg-ok');
                        this._removeListeners();
                    }
                })
                .catch((err) => {
                    if (err.status === 409) {
                        this._errorServerMessage.textContent = 'Такой пользователь существует!';
                        this._errorServerMessage.classList.add('popup__error_is_active');
                    } else if(err.status === 400) {
                        this._errorServerMessage.textContent = 'Не правильный формат данных!';
                        this._errorServerMessage.classList.add('popup__error_is_active');
                    }
                });
        }
    }

    // валидирует переданный в качестве аргумента инпут;
    _validateInputElement = input => {
        const errorBlock = this.form.querySelector(`#error-${input.name}`);

        if(this._errorServerMessage) {
            this._errorServerMessage.classList.remove('popup__error_is_active');
        }

        if(input.validity.tooShort || input.validity.tooLong) {
            if (input.type === 'password') {
                errorBlock.textContent = this.errorMess.TOO_SHORT_PASSWORD;
            } else {
                errorBlock.textContent = this.errorMess.TOO_SHORT;
            }

            this._checkInputValidity(errorBlock, false);
            return false;
        }

        if(input.type === 'email' && input.validity.patternMismatch) {
            errorBlock.textContent = this.errorMess.EMAIL_ERROR;

            this._checkInputValidity(errorBlock, false);
            return false;
        }

        errorBlock.textContent = '';
        this._checkInputValidity(errorBlock);

        return true;
    }

    _checkInputValidity = (errorBlock, isValid = true) => {
        if (isValid) {
            errorBlock.classList.remove('popup__error_is_active');
        } else {
            errorBlock.classList.add('popup__error_is_active');
        }
    }

    // валидирует всю форму;
    _validateForm = () => {
        const isInputsValueEmpty = this._inputs.some((input) => input.value === '');
        this._inputs.forEach((input) => this._validateInputElement(input));
        if(!isInputsValueEmpty) {
            const isValidForm = !this._inputs.some((input) => !this._validateInputElement(input));
            this._submit.disabled = !isValidForm;
        }
    }

    _setEventListeners = () => {
        this.form.addEventListener('input', () => {
            this._validateForm();
        });
    }

    _sendForm = event => {
        event.preventDefault();

        if(this._errorServerMessage) {
            this._errorServerMessage.classList.remove('popup__error_is_active');
        }

        const data = this._inputs.reduce((obj, input) => {
            obj[input.dataset.rest] = input.value;
            return obj;
        }, {});

        this.setServerError(data);
    }

    _addListeners = () => {
        this.form.addEventListener('submit', this._sendForm);
    }

    _removeListeners = () => {
        this.form.removeEventListener('submit', this._sendForm);
    }

    // вспомогательный метод, очищает поля формы;
    _clear = () => {
        this.form.reset();
    }

    //  вспомогательный метод, возвращает данные формы.
    _getInfo = () => {
        return this._inputs.reduce((obj, input) => {
            obj[input.name] = input.value;
            return obj;
        }, {});
    }
}
