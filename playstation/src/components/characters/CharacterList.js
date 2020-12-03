import CharacterItem from './CharacterItem';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';


const CharacterList = () => {

    const { characters } = useContext( CharacterContext );
    const [ charactersState, setCharacters ] = characters;

    const generateCharacters = () => {
        return charactersState.map( ( character, i ) => {
            return <CharacterItem key={i} { ...character } />
        } );
    }


    return (
        <section>
            <Row  xs={ 1 } sm={ 1 } md={ 1 } lg={ 2 } xl={ 3 } >
                { generateCharacters() }
            </Row>
        </section>
    )
}

export default CharacterList;
