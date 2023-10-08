import Widget from "./Items/Widget";
import Weather from "./Weather";
import Favorites from "./Items/Favorites";
import Maps from "./Items/Map"
import TV from "./Items/TvBox";
import Broadcast from "./Items/Broadcast";

/**
 * @description "Блок доп виджетов"
 * 
 * [Weather]{@link module: Weather}
 * 
 * [Favorites]{@link module: Favorites}
 * 
 * [Maps]{@link module: Maps}
 * 
 * [TV]{@link module: TV}
 * 
 * [Broadcast]{@link module: Broadcast}
 * 
 * @returns виджет "Погода" с помощью компонента Weather
 * 
 * @returns виджет "Посещаемое" через перечисляемый компонент Favorites
 * 
 * @returns виджет "Карта" колпонетн Maps
 * 
 * @returns виджет "Телепрограмма" через перечисляемый компонент TV
 * 
 * @returns виджет "Эфир" через перечисляемый компонент Broadcast
 * 
 * @returns Обеспечивает вывод виджетов в три колонки с помощью компонента Widget
 */
export default function WidgetsList() {
  return (
    <section>
      <Widget title="Погода">
        <Weather />
      </Widget>
      <Widget title="Посещаемое">
        <Favorites />
      </Widget>
      <Widget title="Карта Германии">
        <Maps />
      </Widget>
      <Widget title="Телепрограмма">
        <TV />
      </Widget>
      <Widget title="Эфир">
        <Broadcast />
      </Widget>
    </section>
  );
}