import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminUploadImage from './AdminUploadImage';

const CreateGame = () => {

    const [name, setName ] = useState("");
    const [genre, setGenre ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ price, setPrice ] = useState("0");
    const [ image, setImage ] = useState("");
    const [ developer, setDeveloper ] = useState("");
    const [ characters, setCharacters ] = useState("");
    const [ release, setRelease ] = useState("");
    const [ locations, setLocations ] = useState("");


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

            <br />
            <label style={styles.labelStyle}>Beskrivelse</label>
            <input id="desc" onChange={ handleChange } type="text" value={ desc } />

            
            <label style={styles.labelStyle}>Pris</label>
            <input id="price" onChange={ handleChange } type="text" value={ price } />

            <br />
            <label style={styles.labelStyle}>Bilde</label>
            <input id="image" onChange={ handleChange } type="text" value={ image } />

            
            <label style={styles.labelStyle}>Utvikler</label>
            <input id="developer" onChange={ handleChange } type="text" value={ developer } />

            <br />
            <label style={styles.labelStyle}>Karakterer</label>
            <input id="characters" onChange={ handleChange } type="text" value={ characters } />

            
            <label style={styles.labelStyle}>Release</label>
            <input id="release" onChange={ handleChange } type="text" value={ release } />

            <br />
            <label style={styles.labelStyle}>Verdener</label>
            <input id="locations" onChange={ handleChange } type="text" value={ locations } />

            <AdminUploadImage></AdminUploadImage> 
            <br />
            <Button variant="success" onClick={ createGame } >Legg til nytt spill</Button>
        </section>
    )
}

export default CreateGame;