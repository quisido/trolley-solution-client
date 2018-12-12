import React from 'react';
import { animateDelay } from '../player-list-item-utils';
import './player-list-item-points.scss';

interface Props {
  children: number;
  index: number;
}

const pointsAnimateDelay = (index: number) =>
  animateDelay(index) + 0.5;

const PlayerListItemPoints = ({ children, index }: Props) =>
  <abbr
    className="player-list-item-points"
    style={{
      animationDelay: `${pointsAnimateDelay(index)}s`
    }}
    title={`${children} points`}
  >
    {children} pts
  </abbr>;

export default PlayerListItemPoints;
