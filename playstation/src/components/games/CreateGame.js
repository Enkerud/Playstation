import { useState } from 'react';
import axios from 'axios';

const CreateGame = () => {

    const [name, setName ] = useState("s");
    const [genre, setGenre ] = useState("t");
    const [ desc, setDesc ] = useState("u");
    const [ price, setPrice ] = useState("v");
    const [ image, setImage ] = useState("r");
    const [ developer, setDeveloper ] = useState("w");
    const [ characters, setCharacters ] = useState("x");
    const [ release, setRelease ] = useState("y");
    const [ locations, setLocations ] = useState("z");


    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "genre":
                setGenre( e.target.value );
                break;
            case "desc":
                setDesc( e.target.value );
                break;
            case "price":
                setPrice( parseInt(e.target.value ));
                break;
            case "image":
                setImage( e.target.value );
                break;
            case "developer":
                setDeveloper( e.target.value );
                break;
            case "characters":
                setCharacters( e.target.value );
                break; 
            case "release":
                setRelease( e.target.value );
                break; 
            case "locations":
                setLocations( e.target.value );
                break;  
                default: 
        }
    }

    const createGame = () => {
        const url = "https://localhost:5001/games";
        const newGame = { 
            name: name, 
            genre: genre, 
            desc: desc, 
            price: price, 
            image: image,
            developer: developer, 
            characters: characters, 
            release: release,
            locations: locations
        };

        axios.post(url, newGame)
    }

    const styles = {
        labelStyle: {
            color: 'white',
            margin: '10px'
        }
    }

    return (
        <section>
            <h3 style={styles.labelStyle}>Legg inn nytt spill</h3>
            <label style={styles.labelStyle}>Navn</label>
            <input id="name" onChange={ handleChange } type="text" value={ name } />
            <label style={styles.labelStyle}>Sjanger</label>
            <input id="genre" onChange={ handleChange } type="text" value={ genre } />
            <label style={styles.labelStyle}>Beskrivelse</label>
            <input id="desc" onChange={ handleChange } type="text" value={ desc } />
            <label style={styles.labelStyle}>Pris</label>
            <input id="price" onChange={ handleChange } type="text" value={ price } />
            <label style={styles.labelStyle}>Bilde</label>
            <input id="image" onChange={ handleChange } type="text" value={ image } />
            <label style={styles.labelStyle}>Utvikler</label>
            <input id="developer" onChange={ handleChange } type="text" value={ developer } />
            <label style={styles.labelStyle}>Karakterer</label>
            <input id="characters" onChange={ handleChange } type="text" value={ characters } />
            <label style={styles.labelStyle}>Release</label>
            <input id="release" onChange={ handleChange } type="text" value={ release } />
            <label style={styles.labelStyle}>Verdener</label>
            <input id="locations" onChange={ handleChange } type="text" value={ locations } />

            <input onClick={ createGame }  type="button" value="Legg til nytt spill"></input>
        </section>
    )
}

export default CreateGame;