import React from 'react';
import './App.css';
import { Card }  from "./components/Cards";
import { Image } from './components/Image';

function App() {
  return (
    <div className="App">
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <Image />
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content.">
      </Card>
    </div>
  );
}

export default App;
