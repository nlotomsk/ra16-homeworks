import Widget from "./Items/Widget";

/**
 * @module "Промо-сервиса"
 * 
 * Отображение баннера сервиса
 * 
 * [Widget]{@link module: Widget} 
 * 
 * @returns Выводит виджет с текстовым описанием с помощью компонента Widget
 */
export default function Promo() {
  return (
    <div>
      <img src="" alt="logo"/>
      <Widget title="Widget">
        Text Widget
      </Widget>
    </div>
  );
}