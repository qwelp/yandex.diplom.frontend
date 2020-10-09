export default class {

    constructor({ preloader }) {
        this.preloader = preloader;

        this._init();
    }

    _init() {
        this._addListeners();
    }

    // Удаление preloader
    _removePreloader = () =>  this.preloader.remove();

    /*
    * При вызове перерисовывает шапку в зависимости от переданного аргумента — объекта props.
    * У этого объекта есть два обязательных свойства:
    * isLoggedIn — залогинен ли пользователь;
    * userName — имя, которое отображается в шапке залогиненного пользователя.
    */
    render() {

    }

    _addListeners() {
        // Удаление preloader после загрузки DOM
        document.addEventListener('DOMContentLoaded', this._removePreloader);
    }

    _removeListeners() {

    }
}
