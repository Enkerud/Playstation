import {GameContext } from '../contexts/GameContext';
import { useContext } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';


const GameUpdate = () => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const updateGame = () => {
        const url ="https://localhost:5001/games";
        axios.put(`${url}/${gameState.id}`, gameState);
    }

    const styles = {
        labelStyle: {
          color: 'white',
        }
      };

    return (
        <section>
            <Col>
            <h3>Endre spill</h3>
            
            <label style={styles.labelStyle}>Navn: </label>
            <input
            onChange={ (e) => setGame({...gameState, name: e.target.value}) } 
            type="text" value={ gameState.name } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>
           
            <label style={styles.labelStyle}>Sjanger</label>
            <input 
            onChange={ (e) => setGame({...gameState, genre: e.target.value}) } 
            type="text" value={ gameState.genre } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>
            
            <label style={styles.labelStyle}>Desc</label>
            <input 
            onChange={ (e) => setGame({...gameState, desc: e.target.value}) } 
            type="text" value={ gameState.desc } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            <label style={styles.labelStyle}>Pris</label>
            <input 
            onChange={ (e) => setGame({...gameState, price: e.target.value}) } 
            type="text" value={ gameState.price } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            <label style={styles.labelStyle}>Utvikler</label>
            <input 
            onChange={ (e) => setGame({...gameState, developer: e.target.value}) } 
            type="text" value={ gameState.developer } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            <label style={styles.labelStyle}>Karakterer</label>
            <input 
            onChange={ (e) => setGame({...gameState, characters: e.target.value}) } 
            type="text" value={ gameState.characters } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            <label style={styles.labelStyle}>Utgivelsesdato</label>
            <input 
            onChange={ (e) => setGame({...gameState, release: e.target.value}) } 
            type="text" value={ gameState.release } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            <label style={styles.labelStyle}>Verdener</label>
            <input 
            onChange={ (e) => setGame({...gameState, locations: e.target.value}) } 
            type="text" value={ gameState.locations } ></input>
            <input onClick={ updateGame} type="button" value="Endre"></input>

            </Col>

        </section>
    )
    
}


export default GameUpdate;
