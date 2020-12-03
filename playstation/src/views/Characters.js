import { CharacterProvider } from '../contexts/CharacterContext';
import CharacterList from '../components/characters/CharacterList';




const Characters = () => {
    return (
        <section>
            <h3
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '80px',
                height: '200%'
            }} >Alle karakterer</h3>

            <CharacterProvider>
                <CharacterList></CharacterList>
 
            </CharacterProvider>
            
        </section>
    )
}

export default Characters;