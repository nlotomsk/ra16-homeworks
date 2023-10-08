
import { useState } from 'react';
import './App.css'
import JSONFetch from './components/Data';

function App() {
  const [urlActive, setUrlActive] = useState("http://localhost:17070/data")

   
  const handlerOK = () => {
    setUrlActive("http://localhost:17070/data");  
  }

  const handlerLoading = () => {
    setUrlActive("http://localhost:17070/loading");
  }

  const handlerError = () => {
    setUrlActive("http://localhost:17070/error");
  }

  return (
    <div className='App-header'>
      <button onClick={() => handlerOK()}>ОК</button>
      <button onClick={() => handlerLoading()}>Loading</button>
      <button onClick={() => handlerError()}>Error</button>
      <JSONFetch url={urlActive}/>
    </div>
  )
}

export default App