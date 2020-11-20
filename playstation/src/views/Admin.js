import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GameProvider from '../contexts/GameContext';
import AdminGameList from '../components/games/AdminGameList';
import GameUpdate from '../components/GameUpdate';
import CreateGame from '../components/games/CreateGame';



const Admin = () => {

    const styles = {
        labelStyle: {
            textAlign: 'center',
            color: 'white',
            margin: '30px'
        }};

    return (
        <div>
            <h1 style={styles.labelStyle}>Admin</h1>

            <h3 style={styles.labelStyle}>Spill</h3>

            <Button>+ Legg til spill</Button>

            <GameProvider>
                <AdminGameList></AdminGameList>
                <GameUpdate></GameUpdate>
                <CreateGame></CreateGame>
            </GameProvider>

            <h3 style={styles.labelStyle}>Karakterer</h3>
        </div>
    )
}

export default Admin
