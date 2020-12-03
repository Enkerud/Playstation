import CharacterItem from './CharacterItem';
import React, { useEffect, useState } from 'react';


const CharacterPage = ({ match, location }) => {
  const { params: { id } } = match;

  const [character, setCharacter] = useState({ name: "lol" });
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (! isFetched) {
      fetch(`https://localhost:5001/characters/${id}`, {}) // må hente id fra params
        .then((response) => response.json())
        .then((responseJSON) => {
          
          setIsFetched(true)
          setCharacter(responseJSON);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [character, isFetched]);

  const styles = {
    textStyle: {
        textAlign: 'center',
        margin: '1em',
        width: 'auto',
        color: 'white'
    },
    imgStyle: {
      width: "100%",
      maxWidth: "800px"
  }};

  

 


  return (
    <div style={styles.textStyle}>
        <h1>Karakteren</h1>
      <h1>{character.name}</h1>
      <img src={character.image} style={styles.imgStyle}></img>
      <p> "{character.alias}"</p>
      <p>{character.game}</p>
      <p>{character.desc}</p>
      <p>{character.age} år gammel</p>
      <p>{character.weapon}</p>
     
    </div>

  );
}


export default CharacterPage;