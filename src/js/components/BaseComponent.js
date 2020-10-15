export default class {

    wrapCreate = html => {
        const popupWrap = document.createElement('div');
        popupWrap.insertAdjacentHTML('beforeend', html);

        return popupWrap;
    }

    dateFormat = (dateString) => {
        const date = new Date(dateString);
        const monthItems = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентаября',
            'октября',
            'ноября',
            'декабря'
        ];

        return `${date.getDate()} ${monthItems[date.getMonth()]}, ${date.getFullYear()}`;
    }
}
