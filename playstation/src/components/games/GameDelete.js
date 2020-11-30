import axios from 'axios';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import {GameContext } from '../../contexts/GameContext';


const GameDelete = ( id ) => {

    const { game } = useContext( GameContext );

    const deleteGame = () => {
        const url ="https://localhost:5001/games";
        axios.delete(`${url}/${id}`)
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