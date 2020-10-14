export default class {

    constructor({ baseComponent }) {
        this.baseComponent = baseComponent;
    }

    renderIcon = (del = false) => {
        if(del) {
            return this.baseComponent.wrapCreate(this._templateIconDelete()).querySelector('.button-mark');
        } else {
            return this.baseComponent.wrapCreate(this._templateIcon()).querySelector('.button-mark');
        }
    }

    _templateIcon = () => {
        return `<button class="button-mark search-result-cart__favourites" data-msg="Нажмите, чтобы сохранить статью">
          <svg class="button-mark__icon">
            <use xlink:href="#favourites"></use>
          </svg>
        </button>`;
    }

    _templateIconDelete = () => {
        return `<button class="button-mark search-result-cart__favourites" data-msg="Убрать из сохранённых">
          <svg class="button-mark__icon-delete">
                <use xlink:href="#delete"></use>
            </svg>
        </button>`;
    }
}
