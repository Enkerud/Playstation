import AdminCharacterItem from './AdminCharacterItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';


const AdminCharacterList = () => {

    const { characters } = useContext( CharacterContext );
    const [ charactersState, setCharacters ] = characters;

    const generateCharacters = () => {
        return charactersState.map( ( character, i ) => {
            return <AdminCharacterItem key={i} { ...character } />
        } );
    }
    

    return (
        <section>
            <Row   xs={ 1 } sm={ 2 } md={ 3 } lg={ 4 } xl={ 4 } >
                { generateCharacters() }
            </Row>
        </section>
    )
    
}

export default AdminCharacterList;
