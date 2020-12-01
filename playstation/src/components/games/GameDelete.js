import axios from 'axios';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';


const GameDelete = (props) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const deleteGame = () => {
        const url ="https://localhost:5001/games";
        axios.delete(`${url}/${props.id}`, setGame)
            .then(response => {
                console.log(response);
            });   
    }


    return (
        <Button variant="danger"
            onClick={ deleteGame}>Slett
        </Button>
    )
}

export default GameDelete;