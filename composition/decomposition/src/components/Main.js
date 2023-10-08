import News from "./News";
import Promo from "./Promo";
import Search from "./Search";
import Banner from './Banner';
import WidgetsList from "./WidgetsList";

/**
 * @description Основной компонент страницы
 * 
 * [News]{@link module: News}
 * 
 * [Promo]{@link module: Promo}
 * 
 * [Search]{@link module: Search}
 * 
 * [Banner]{@link module: Banner}
 * 
 * [WidgetsList]{@link module: WidgetsList}
 * 
 * @returns Возвращвет объединенные модули.
 */
export default function Main() {
  return (
    <main>
      <News />
      <Promo />
      <Search />
      <Banner />
      <WidgetsList />
    </main>
  );
}