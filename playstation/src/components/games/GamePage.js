import GameItem from './GameItem';
import React, { useEffect, useState } from 'react';


const GamePage = ({ match }) => {
  //Her bruker jeg params og match til å gjøre bruk av id hos valgt GameItem for å gå inn til en side med mer detaljer.
  const { params: { id } } = match;

  const [game, setGame] = useState({ name: "Spill" }); //Bruker state for å sette et navn hvis id ikke blir funnet/ikke loader.
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (! isFetched) {
      fetch(`https://localhost:5001/games/${id}`, {}) // Henter id fra params
        .then((response) => response.json())
        .then((responseJSON) => {
          
          //Setter det som er hentet fra localhost til setGame.
          setIsFetched(true)
          setGame(responseJSON);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [game, isFetched]);

  //Styling
  const styles = {
    textStyle: {
        textAlign: 'center',
        margin: '1em',
        width: 'auto',
        color: 'white',
    },
    imgStyle: {
      width: "100%",
      maxWidth: "800px"
  }};

  return (
    <div style={styles.textStyle}>
      <h1>{game.name}</h1>
      <img src={game.image} style={styles.imgStyle}></img>
      <p>{game.genre}</p>
      <p>{game.desc}</p>
      <p>{game.price},-</p>
      <p>{game.developer}</p>
      <p>{game.release}</p>
      <h3>Karakterer</h3>
      <p>{game.characters}</p>
      <h3>Verdener</h3>
      <p> {game.locations} </p>
    </div>
  );
}

export default GamePage;