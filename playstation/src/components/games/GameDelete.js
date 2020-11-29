import axios from 'axios';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';


const GameDelete = ( props ) => {

    const { game } = useContext( GameContext );
    const [ gameState ] = game;

    const deleteGame = () => {
        const url ="https://localhost:5001/games";
        axios.delete(`${url}/${game.id}`, game, {data: game});
    }

    return (
        <Button
            onClick={ deleteGame }>Slett
        </Button>
    )
}

export default GameDelete;