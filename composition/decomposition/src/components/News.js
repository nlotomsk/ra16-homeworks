import Title from "./Title";
import NewsItem from "./Items/NewsItem";
import Currency from "./Items/Currency";

/**
 * @module "Новости"
 * 
 * [NewsItem]{@link module: NewsItem}
 * 
 * [Currency]{@link module: Currency}
 * 
 * @returns Выводит три категории Новостей с помощью компонента Title
 * 
 * @returns Выводит перечень новостей через перечисляемый компонент NewsItem
 * 
 * @returns Выводит перечень курсов валют через перечисляемый компонент Currency
 */
export default function News() {
  return (
    <section>
      <Title text="Сейчас в СМИ" link="#" />
      <Title text="В Германии" link="#" selected={false} />
      <Title text="Рекомендуем" link="#" selected={false} />
      <div className="date" />
        <NewsItem />
        <Currency />
    </section>
  );
}