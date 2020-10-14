export default class {

    constructor({ urlServerRest, headerConfig, newsapiKey }) {
        this.urlServerRest = urlServerRest;
        this.headerConfig = headerConfig;
        this.newsapiKey = newsapiKey;
    }


    getArticles = q => {
        return fetch(`${this.urlServerRest}/newsapi/${q}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    getArticles1 = q => {
        return fetch(`https://newsapi.org/v2/top-headlines?country=ru&q=${q}&apiKey=${this.newsapiKey}`, {
            method: 'GET'
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    deleteArticle = (id) => {
        return fetch(`${this.urlServerRest}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    getSaveArticle = () => {
        return fetch(`${this.urlServerRest}/articles`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    createArticle = (data) => {
        return fetch(`${this.urlServerRest}/articles`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    getUserData = (token) => {
        return fetch(`${this.urlServerRest}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    signup = (data) => {
        return fetch(`${this.urlServerRest}/signup`, {
            method: 'POST',
            headers: this.headerConfig,
            credentials: 'include',
            body: JSON.stringify(data)
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    signin = (data) => {
        return fetch(`${this.urlServerRest}/signin`, {
            method: 'POST',
            headers: this.headerConfig,
            credentials: 'include',
            body: JSON.stringify(data)
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    _getResponseData = response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(response);
    }

    _getResponseError = err => {
        return Promise.reject(err);
    }
}
