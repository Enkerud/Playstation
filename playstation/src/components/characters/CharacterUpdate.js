import {CharacterContext } from '../../contexts/CharacterContext';
import { useContext } from 'react';
import axios from 'axios';
import { Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const CharacterUpdate = () => {

    const { character } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;

    const updateCharacter = () => {
        const url ="https://localhost:5001/characters";
        axios.put(`${url}/${characterState.id}`, characterState);
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
            <h3 style={styles.labelStyle}>Endre karakter</h3>

            <label style={styles.labelStyle}>Navn: </label>
            <input style={styles.inputStyle}
            onChange={ (e) => setCharacter({...characterState, name: e.target.value}) } 
            type="text" value={ characterState.name } ></input>

           
            <label style={styles.labelStyle}>Alias</label>
            <input 
            onChange={ (e) => setCharacter({...characterState, alias: e.target.value}) } 
            type="text" value={ characterState.alias } ></input>
            
            
            <label style={styles.labelStyle}>Desc</label>
            <input 
            onChange={ (e) => setCharacter({...characterState, desc: e.target.value}) } 
            type="text" value={ characterState.desc } ></input>
            

            <label style={styles.labelStyle}>Alder</label>
            <input 
            onChange={ (e) => setCharacter({...characterState, age: parseInt(e.target.value)}) } 
            type="number" value={ characterState.age } ></input>

            <label style={styles.labelStyle}>image</label>
            <input 
            onChange={ (e) => setCharacter({...characterState, image: e.target.value}) } 
            type="text" value={ characterState.image } ></input>


            <Button onClick={ updateCharacter}>Endre</Button>
            </Col>

        </section>
    )
    
}


export default CharacterUpdate;
