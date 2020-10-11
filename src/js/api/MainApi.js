export default class {

    constructor({ urlServerRest, headerConfig }) {
        this.urlServerRest = urlServerRest;
        this.headerConfig = headerConfig;
    }

    getUserData = () => {
        return fetch(`${this.urlServerRest}/users/me`, {
            method: 'GET',
            headers: this.headerConfig
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    signup = (data) => {
        return fetch(`${this.urlServerRest}/signup`, {
            method: 'POST',
            headers: this.headerConfig,
            body: JSON.stringify(data)
        })
            .then(res => this._getResponseData(res))
            .catch(err => this._getResponseError(err));
    }

    signin = (data) => {
        return fetch(`${this.urlServerRest}/signin`, {
            method: 'POST',
            headers: this.headerConfig,
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
