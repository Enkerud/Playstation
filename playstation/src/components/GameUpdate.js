import {GameContext } from '../contexts/GameContext';
import { useContext } from 'react';
import axios from 'axios';
import { Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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
          margin: '10px'
        },
        inputStyle: {
            width: '300px'
        }
      };

    return (
        <section>
            <Col >
            <h3 style={styles.labelStyle}>Endre spill</h3>

            <label style={styles.labelStyle}>Navn: </label>
            <input style={styles.inputStyle}
            onChange={ (e) => setGame({...gameState, name: e.target.value}) } 
            type="text" value={ gameState.name } ></input>

           
            <label style={styles.labelStyle}>Sjanger</label>
            <input 
            onChange={ (e) => setGame({...gameState, genre: e.target.value}) } 
            type="text" value={ gameState.genre } ></input>
            
            
            <label style={styles.labelStyle}>Desc</label>
            <input 
            onChange={ (e) => setGame({...gameState, desc: e.target.value}) } 
            type="text" value={ gameState.desc } ></input>
            

            <label style={styles.labelStyle}>Pris</label>
            <input 
            onChange={ (e) => setGame({...gameState, price: parseInt(e.target.value)}) } 
            type="number" value={ gameState.price } ></input>
            

            <label style={styles.labelStyle}>Utvikler</label>
            <input 
            onChange={ (e) => setGame({...gameState, developer: e.target.value}) } 
            type="text" value={ gameState.developer } ></input>
            

            <label style={styles.labelStyle}>Karakterer</label>
            <input 
            onChange={ (e) => setGame({...gameState, characters: e.target.value}) } 
            type="text" value={ gameState.characters } ></input>
            

            <label style={styles.labelStyle}>Utgivelsesdato</label>
            <input 
            onChange={ (e) => setGame({...gameState, release: e.target.value}) } 
            type="text" value={ gameState.release } ></input>
            

            <label style={styles.labelStyle}>Verdener</label>
            <input 
            onChange={ (e) => setGame({...gameState, locations: e.target.value}) } 
            type="text" value={ gameState.locations } ></input>
            <Button onClick={ updateGame}>Endre</Button>

            </Col>

        </section>
    )
    
}


export default GameUpdate;
