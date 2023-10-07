import React from 'react'
import { useState } from 'react';

export default function Converter() {
  const [color, setColor] = useState('');

  const handleChange = ({ target }) => {
    if (target.value.length < 7) {
      return;
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
    if (!result) {
      setColor('Ошибка!');
      return;
    }

    const rgb = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
    setColor(`rgb(${rgb})`);
  }

  return (
    <div className="converter" style={{ backgroundColor: color }}>
      <div className="converter__container">
        <input className="converter__input" onChange={handleChange} placeholder='Type in HEX'/>
        <div className="converter__result" placeholder='RGB'>{color}</div>
      </div>
    </div>
  );
}