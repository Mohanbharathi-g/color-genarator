import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='main-section'>
      <h1>Random color</h1>

      <Colors />
    </div>
  );
};

const Colors = () => {
  return (
    <div className='colors'>
      {color.map((val) => {
        return <h2 style={{ backgroundColor: val }}>{val}</h2>;
      })}
    </div>
  );
};

const color = [];
let letters = '0123456789abcdef';

let front = '#';

function randomColor() {
  console.log(color);
  for (let i = 0; i < 50; i++) {
    for (let i = 0; i < 6; i++) {
      front += letters[Math.floor(Math.random() * 16)];

      // console.log(front);
    }
    color.push(front);
    front = `#`;
  }

  console.log({ ...color });
}

randomColor();

export default App;
