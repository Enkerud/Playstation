import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GameProvider from '../contexts/GameContext';
import AdminGameList from '../components/games/AdminGameList';
import GameUpdate from '../components/GameUpdate';
import CreateGame from '../components/games/CreateGame';

import CharacterProvider from '../contexts/CharacterContext';
import AdminCharacterList from '../components/characters/AdminCharacterList';
import CharacterUpdate from '../components/characters/CharacterUpdate';
import CreateCharacter from '../components/characters/CreateCharacter';

import LocationProvider from '../contexts/LocationContext';
import AdminLocationList from '../components/locations/AdminLocationList';
import LocationUpdate from '../components/locations/LocationUpdate';
import CreateLocation from '../components/locations/CreateLocation';



const Admin = () => {

    const styles = {
        labelStyle: {
            textAlign: 'center',
            color: 'white',
            margin: '30px auto'
        },
        displayShow: {
            display: 'show'
        }
    };

    

    return (
        <div>
            <a name="top"></a>

            <h1 style={styles.labelStyle}>Admin</h1>
            <div style={styles.labelStyle}>
                <h2>Gå direkte til</h2>
                <a style={styles.labelStyle} href="#characters"> Karakterer </a>
                 | 
                <a style={styles.labelStyle} href="#locations"> Verdener </a>
            </div>

            
            
            <h3 style={styles.labelStyle}>Spill</h3>
            <GameProvider>
                <AdminGameList></AdminGameList>
                <Button variant="success">+ Legg til spill</Button>
                <GameUpdate></GameUpdate>
                <CreateGame></CreateGame>
            </GameProvider>

            <h3 style={styles.labelStyle}>Karakterer</h3>
            <a name="characters"></a>
            <CharacterProvider>
                <AdminCharacterList></AdminCharacterList>
                <Button variant="success">+ Legg til karakter</Button>
                <CharacterUpdate></CharacterUpdate>
                <CreateCharacter style={styles.labelStyle}></CreateCharacter>
            </CharacterProvider>

            <h3 style={styles.labelStyle}>Verdener</h3>
            
            <LocationProvider>
            <a name="locations"></a>
                <AdminLocationList></AdminLocationList>
                <Button variant="success">+ Legg til verden</Button>
                <LocationUpdate></LocationUpdate>
                <CreateLocation style={styles.labelStyle}></CreateLocation>
            </LocationProvider>

            <br/>

            <a style={styles.labelStyle} href="#top">Tilbake til toppen</a>
        </div>
    )
    
}

export default Admin
