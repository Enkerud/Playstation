import React from 'react'
import GameItem from './GameItem';
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';


const GamePage = ({ match, location }) => {
  const { params: { id } } = match;



  return (
    <div>
        <h3>Spillet</h3>
        <h1>{id}</h1>
        <GameItem></GameItem>


      </div>
    
  );
}


export default GamePage;
