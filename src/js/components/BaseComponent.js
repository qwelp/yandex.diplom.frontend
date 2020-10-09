export default class {

    constructor(array) {
        this.array = array;
    }

    // добавляет обработчики конкретным элементам
    _setHandlers() {
        this.array.forEach((item) => {
            item.element.addEventListener(item.evt, () => {
                const f = item.elementFunc.eval('item.func');
                console.log(f);
            });
        });
    }
}
