import { useState } from 'react';
import axios from 'axios';

const CreateCharacter = () => {

    const [name, setName ] = useState("");
    const [alias, setAlias ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ age, setAge ] = useState("0");
    const [ image, setImage ] = useState("");
    const [ game, setGame ] = useState("");
    const [ weapon, setWeapon ] = useState("");
    const [ enemy, setEnemy ] = useState("");



    const handleChange = ( e ) => {
        switch( e.target.id ){
            case "name":
                setName( e.target.value );
                break;
            case "alias":
                setAlias( e.target.value );
                break;
            case "desc":
                setDesc( e.target.value );
                break;
            case "age":
                setAge( parseInt(e.target.value ));
                break;
            case "image":
                setImage( e.target.value );
                break; 
                case "game":
                setGame( e.target.value );
                break; 
            case "weapon":
                setWeapon( e.target.value );
                break; 
            case "enemy":
                setEnemy( e.target.value );
                break; 
                default: 
        }
    }

    const createCharacter = () => {
        const url = "https://localhost:5001/characters";
        const newCharacter = { 
            name: name, 
            alias: alias, 
            desc: desc, 
            age: age, 
            image: image,
            game: game,
            weapon: weapon,
            enemy: enemy
        };

        axios.post(url, newCharacter)
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
            <label style={styles.labelStyle}>Sjanger</label>
            <input id="alias" onChange={ handleChange } type="text" value={ alias } />

            <br />
            <label style={styles.labelStyle}>Beskrivelse</label>
            <input id="desc" onChange={ handleChange } type="text" value={ desc } />

            <br />
            <label style={styles.labelStyle}>Alder</label>
            <input id="age" onChange={ handleChange } type="text" value={ age } />

            <br />
            <label style={styles.labelStyle}>Bilde(url)</label>
            <input id="image" onChange={ handleChange } type="text" value={ image } />

            <br />
            <label style={styles.labelStyle}>Spill</label>
            <input id="game" onChange={ handleChange } type="text" value={ game } />

            <br />
            <label style={styles.labelStyle}>Våpen</label>
            <input id="weapon" onChange={ handleChange } type="text" value={ weapon } />

            <br />
            <label style={styles.labelStyle}>Fiende</label>
            <input id="enemy" onChange={ handleChange } type="text" value={ enemy } />


            <input onClick={ createCharacter }  type="button" value="Legg til ny karakter"></input>

        </section>
    )
}

export default CreateCharacter;