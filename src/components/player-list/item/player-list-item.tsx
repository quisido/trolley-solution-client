import React from 'react';
import './player-list-item.scss';

interface Props extends Player {
  index: number;
}

const animationDelay = (index: number) =>
  (index + 1) * 0.75;

const PlayerListItem = ({ color, index, name }: Props) => {
  return (
    <li
      className="player-list-item"
      style={{
        animationDelay: `${animationDelay(index)}s`,
        backgroundColor: `#${color}`,
        borderColor: `#${color}`
      }}
    >
      {name}
    </li>
  );
};

export default PlayerListItem;
