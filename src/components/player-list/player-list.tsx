import React from 'react';
import { useGlobal } from 'reactn';
import PlayerListItem from './item/player-list-item';
import './player-list.scss';

const PlayerList = () => {
  const [ players ] = useGlobal<Player[]>('players');
  return (
    <ul className="player-list">
      {players.map((player, index) =>
        <PlayerListItem
          index={index}
          key={player.name}
          {...player}
        />
      )}
    </ul>
  )
};

export default PlayerList;
