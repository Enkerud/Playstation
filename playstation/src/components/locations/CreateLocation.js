import { useState } from 'react';
import axios from 'axios';

const CreateLocation = () => {

    const [name, setName ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ image, setImage ] = useState("");
    const [ game, setGame ] = useState("");
    const [ enemies, setEnemies ] = useState("");



    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "desc":
                setDesc( e.target.value );
                break;
            case "image":
                setImage( e.target.value );
                break; 
                case "game":
                setGame( e.target.value );
                break; 
            case "enemies":
                setEnemies( e.target.value );
                break; 
                default: 
        }
    }

    const createLocation = () => {
        const url = "https://localhost:5001/locations";
        const newLocation = { 
            name: name, 
            desc: desc, 
            image: image,
            game: game,
            enemies: enemies
        };

        axios.post(url, newLocation)
    }

    const styles = {
        labelStyle: {
            color: 'white',
            margin: '10px'
        }
    }

    return (
        <section>
            <h3 style={styles.labelStyle}>Legg inn ny karakter</h3>
            <label style={styles.labelStyle}>Navn</label>
            <input id="name" onChange={ handleChange } type="text" value={ name } />


            <br />
            <label style={styles.labelStyle}>Beskrivelse</label>
            <input id="desc" onChange={ handleChange } type="text" value={ desc } />



            <br />
            <label style={styles.labelStyle}>Bilde(url)</label>
            <input id="image" onChange={ handleChange } type="text" value={ image } />

            <br />
            <label style={styles.labelStyle}>Spill</label>
            <input id="game" onChange={ handleChange } type="text" value={ game } />


            <br />
            <label style={styles.labelStyle}>Fiende</label>
            <input id="enemies" onChange={ handleChange } type="text" value={ enemies } />


            <input onClick={ createLocation }  type="button" value="Legg til ny karakter"></input>

        </section>
    )
}

export default CreateLocation;