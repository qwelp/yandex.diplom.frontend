export default class {

    constructor({ preloader }) {
        this.preloader = preloader;

        this._init();
    }

    _init() {
        this._addListeners();
    }

    _addListeners() {
        document.addEventListener("DOMContentLoaded", this.preloader.remove());
    }
}
