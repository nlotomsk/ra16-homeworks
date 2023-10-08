import Title from "../Title";

/**
 * @description "Виджет"
 * 
 * Форматирование виджетов и вывод заголовка Title
 * 
 *  @param {string} title - текст заголовка
 *  @param {string} url- ссылка с заголовка
 * 
 * @returns Возвращает модуль погоды
 */
export default function Widget(props) {
  const {title, url} = props;
  return (
    <div>
      <Title text={title} link={url}/>
      {props.children}
    </div>
  );
}