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



const Admin = () => {

    const styles = {
        labelStyle: {
            textAlign: 'center',
            color: 'white',
            margin: '30px'
        },
        displayShow: {
            display: 'show'
        }
    };

    

    return (
        <div>
            <h1 style={styles.labelStyle}>Admin</h1>

            <h3 style={styles.labelStyle}>Spill</h3>

            

            <GameProvider>
                <AdminGameList></AdminGameList>
                <Button variant="success">+ Legg til spill</Button>
                <GameUpdate></GameUpdate>
                <CreateGame></CreateGame>
            </GameProvider>

            <h3 style={styles.labelStyle}>Karakterer</h3>

            <CharacterProvider>
                <AdminCharacterList></AdminCharacterList>
                <Button variant="success">+ Legg til karakter</Button>
                <CharacterUpdate></CharacterUpdate>
                <CreateCharacter style={styles.labelStyle}></CreateCharacter>
            </CharacterProvider>
        </div>
    )
    
}

export default Admin
