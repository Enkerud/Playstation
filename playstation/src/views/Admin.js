import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';


import GameProvider from '../contexts/GameContext';
import AdminGameList from '../components/games/AdminGameList';
import GameUpdate from '../components/GameUpdate';

const Admin = () => {
    return (
        <div>
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px'
            }} >Admin</h3>

            <GameProvider>
                <AdminGameList></AdminGameList>
                <GameUpdate></GameUpdate>
            </GameProvider>
        </div>
    )
}

export default Admin
