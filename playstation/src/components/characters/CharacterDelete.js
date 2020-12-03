import axios from 'axios';
import { useContext } from 'react';
import {Button} from 'react-bootstrap';
import {CharacterContext } from '../../contexts/CharacterContext';

const CharacterDelete = (props) => {
    const { character } = useContext( CharacterContext );
    const [ setCharacter ] = character;

    const deleteCharacter = () => {
        const url ="https://localhost:5001/characters";
        axios.delete(`${url}/${props.id}`, setCharacter)
            .then(response => {
                console.log(response);
            });   
    }

    return (
        <Button variant="danger"
            onClick={ deleteCharacter}>Slett
        </Button>
    )
}

export default CharacterDelete;