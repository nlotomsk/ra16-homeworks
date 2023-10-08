/**
 * @description  "Заголовок"
 * 
 * @param {string} text- текст заголовка
 * @param {string} url- ссылка с заголовка
 * @param {boolean} selected - является ли элемент активным (подсвеченным)
 * 
 * @returns Возвращает заголовок
 */
export default function Title({ text, url, selected }) {
    return (
      <h2>{selected='true'}
        <a href={url}>{text}</a>
      </h2>
    );
  }