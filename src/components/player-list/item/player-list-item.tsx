import React from 'react';
import { useGlobal } from 'reactn';
import './player-list-item.scss';
import { animateDelay } from './player-list-item-utils';
import Points from './points/player-list-item-points';

interface Props extends Player {
  index: number;
}

const top = (letter: string) =>
  (letter.charCodeAt(0) % 4) - 2;

const PlayerListItem = ({ color, index, name, points }: Props) => {
  const [ players ] = useGlobal<Player[]>('players');
  return (
    <li
      className="player-list-item"
      style={{
        animationDelay: `${animateDelay(index)}s`,
        backgroundColor: `#${color}`,
        borderColor: `#${color}`,
        zIndex: players.length - index
      }}
    >
      {name.split('').map((letter, letterIndex) =>
        letter === ' ' ?
          letter :
          <span
            key={letterIndex}
            style={{
              top: `${top(letter)}px`
            }}
          >
            {letter}
          </span>
      )}
      <Points index={index}>{points.length}</Points>
    </li>
  );
};

export default PlayerListItem;
