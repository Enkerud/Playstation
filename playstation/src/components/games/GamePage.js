import React from 'react'
import {GameContext } from '../../contexts/GameContext';
import { useContext } from 'react';
import GameItem from './GameItem';
import axios from 'axios';

const GamePage = ( {match: { params: {id } } } ) => {



  return (
    <div>
        <h3>SPILLET</h3>
        <h1>{id}</h1>
        <GameItem></GameItem>


      </div>
    
  );
}


export default GamePage;
