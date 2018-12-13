import React from 'react';
import ReactDOM from 'react-dom';
import { setGlobal } from 'reactn';
import App from './components/app/app';
import { unregister } from './service-worker';

setGlobal({
  players: [],
  started: true
});

const colors = [
  '7FFFD4', '98FB98', '00FF7F', 'C5EFF7', '00FFFF',
  'FFECDB', 'DCC6E0', 'F1A9A0', 'DDA0DD', 'B2CCE5',
  'FFFACD', 'F1F227', 'C9F227', 'F5D76E', 'F5AB35'
];

while (colors.length > 3) {
  colors.splice(Math.floor(Math.random() * colors.length), 1);
}

for (let x = 0; x < 3; x++) {
  setTimeout(() => {
    setGlobal(g => ({
      players: [
        ...g.players,
        {
          color: colors[x],
          name: [ 'Ace', 'Charles', 'Scott' ][x],
          points: []
        }
      ]
    }));
  }, x * 2500);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();
