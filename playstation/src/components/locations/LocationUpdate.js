import {LocationContext } from '../../contexts/LocationContext';
import { useContext } from 'react';
import axios from 'axios';
import { Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const LocationUpdate = () => {

    const { location } = useContext( LocationContext );
    const [ locationState, setLocation ] = location;

    const updateLocation = () => {
        const url ="https://localhost:5001/locations";
        axios.put(`${url}/${locationState.id}`, locationState);
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
            <h3 style={styles.labelStyle}>Endre verden</h3>

            <label style={styles.labelStyle}>Navn: </label>
            <input style={styles.inputStyle}
            onChange={ (e) => setLocation({...locationState, name: e.target.value}) } 
            type="text" value={ locationState.name } ></input>
            
            
            <label style={styles.labelStyle}>Desc</label>
            <input 
            onChange={ (e) => setLocation({...locationState, desc: e.target.value}) } 
            type="text" value={ locationState.desc } ></input>


            <br />
            <label style={styles.labelStyle}>image</label>
            <input 
            onChange={ (e) => setLocation({...locationState, image: e.target.value}) } 
            type="text" value={ locationState.image } ></input>

            
            <label style={styles.labelStyle}>Spill</label>
            <input 
            onChange={ (e) => setLocation({...locationState, game: e.target.value}) } 
            type="text" value={ locationState.game } ></input>


            
            <label style={styles.labelStyle}>Fiende</label>
            <input 
            onChange={ (e) => setLocation({...locationState, enemies: e.target.value}) } 
            type="text" value={ locationState.enemies } ></input>

            <br />
            <Button onClick={ updateLocation}>Oppdater verden</Button>
            </Col>

        </section>
    )
    
}


export default LocationUpdate;
