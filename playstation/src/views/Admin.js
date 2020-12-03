import GameProvider from '../contexts/GameContext';
import AdminGameList from '../components/games/AdminGameList';
import GameUpdate from '../components/games/GameUpdate';
import CreateGame from '../components/games/CreateGame';

import CharacterProvider from '../contexts/CharacterContext';
import AdminCharacterList from '../components/characters/AdminCharacterList';
import CharacterUpdate from '../components/characters/CharacterUpdate';
import CreateCharacter from '../components/characters/CreateCharacter';

import LocationProvider from '../contexts/LocationContext';
import AdminLocationList from '../components/locations/AdminLocationList';
import LocationUpdate from '../components/locations/LocationUpdate';
import CreateLocation from '../components/locations/CreateLocation';

const Admin = () => {

    //Styling
    const styles = {
        labelStyle: {
            textAlign: 'center',
            color: 'white',
            margin: '30px auto',
        },
        displayShow: {
            display: 'show'
        },
        linkStyle: {
            color: 'white',
            fontSize: '20px',
            margin: 'auto',
            textAlign: 'center !important'
        },
        toTopStyle: {
            color: 'white',
            fontSize: '40px',
            margin: 'auto',
            textAlign: 'center'
        }
    };

    return (
        <div>
            {/* Bruker disse <a> taggene for å gi en enklere måte å navigere seg gjennom siden på. */}
            <a name="top"></a>
            <h1 style={styles.labelStyle}>Admin</h1>
            <div style={styles.labelStyle}>
                <h2>Gå direkte til</h2>
                <a href="#characters" style={styles.linkStyle}>Karakterer </a>
                <a>|</a>
                <a href="#bot" style={styles.linkStyle}> Verdener</a>
            </div>
          
            <h3 style={styles.labelStyle}>Spill</h3>
            <GameProvider>
                <AdminGameList></AdminGameList>
                <GameUpdate></GameUpdate>
                <CreateGame></CreateGame>
            </GameProvider>

            <h3 style={styles.labelStyle}>Karakterer</h3>
            <a name="characters"></a>
            <CharacterProvider>
                <AdminCharacterList></AdminCharacterList>
                <CharacterUpdate></CharacterUpdate>
                <CreateCharacter style={styles.labelStyle}></CreateCharacter>
            </CharacterProvider>

            <h3 style={styles.labelStyle}>Verdener</h3>
            <a name="bot"></a>
            <LocationProvider>
                <AdminLocationList></AdminLocationList>
                <LocationUpdate></LocationUpdate>
                <CreateLocation style={styles.labelStyle}></CreateLocation>
            </LocationProvider>

            <br/>
            <div style={styles.toTopStyle}>
                <a href="#top" style={styles.toTopStyle}>Back to top</a>
            </div>
        </div>
    )  
}

export default Admin;