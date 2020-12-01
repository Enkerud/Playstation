import GameItem from './GameItem';
import React, { useEffect, useState } from 'react';


const GamePage = ({ match, location }) => {
  const { params: { id } } = match;

  const [game, setGame] = useState({ name: "lol" });
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (! isFetched) {
      fetch(`https://localhost:5001/games/${id}`, {}) // må hente id fra params
        .then((response) => response.json())
        .then((responseJSON) => {
          
          setIsFetched(true)
          setGame(responseJSON);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [game, isFetched]);

 


  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.genre}</p>
      <p>{game.desc}</p>
      <p>{game.price}</p>
      <p>{game.developer}</p>
      <p>{game.release}</p>
      <h3>Karakterer</h3>
      <p> {game.characters} </p>
      <h3>Verdener</h3>
      <p> {game.locations} </p>


    </div>

  );
}


export default GamePage;