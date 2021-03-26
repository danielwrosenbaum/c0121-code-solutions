import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderPoke(props) {
  const pokeList = pokedex.map(poke =>
    <li key={poke.number}>
      {poke.name}
    </li>
  );
  return (
      <ul>{pokeList}</ul>
  );

}
ReactDOM.render(
  <RenderPoke />,
  document.querySelector('#root')
);
