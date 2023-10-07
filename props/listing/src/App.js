import data from './data/etsy.json'
import Listing from './components/Listing';
import './css/main.css'

function App() {
  return (
    <div className='pp'>
      <Listing items={data} />
    </div>
  );
}

export default App;
