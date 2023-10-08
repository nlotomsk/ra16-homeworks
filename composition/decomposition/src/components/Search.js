import Service from './Items/Service';

/**
 * @description "Блок строки поиска"
 * 
 * [Service]{@link module: Service}
 * 
 * @returns Выводит логотип, поисковую строку, подпись к поисковой строке
 * 
 * @returns Выводит перечень ссылок на внутренние сервисы через компонент Service
 */
export default function Search() {
  return (
    <div>
      <div className="logo" />
      <Service />
      <div className="searchBar" />
      <div className="subtitle" />
    </div>
  );
}