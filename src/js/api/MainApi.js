export default class {

    constructor({ urlRestServer }) {
        this._urlRestServer = urlRestServer;
    }

    // регистрирует нового пользователя;
    signup(data) {

        console.log(`${this._urlRestServer}/signup`);

        return fetch(`${this._urlRestServer}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    // аутентифицирует пользователя на основе почты и пароля;
    signin() {

    }

    // возвращает информацию о пользователе;
    getUserData() {

    }

    // забирает все статьи;
    getArticles() {

    }

    // создаёт статью;
    createArticle() {

    }

    // удаляет статью;
    removeArticle() {

    }

    _getResponseData = (res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(new Error(res.status));
    }

    _getResponseError = (err) => {
        return Promise.reject(new Error(err.message));
    }
}
