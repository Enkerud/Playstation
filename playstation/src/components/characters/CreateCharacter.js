import { useState } from 'react';
import axios from 'axios';

const CreateCharacter = () => {

    const [name, setName ] = useState("s");
    const [alias, setAlias ] = useState("t");
    const [ desc, setDesc ] = useState("u");
    const [ age, setAge ] = useState("0");
    const [ image, setImage ] = useState("r");



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
            <label style={styles.labelStyle}>Sjanger</label>
            <input id="alias" onChange={ handleChange } type="text" value={ alias } />
            <label style={styles.labelStyle}>Beskrivelse</label>
            <input id="desc" onChange={ handleChange } type="text" value={ desc } />
            <label style={styles.labelStyle}>Alder</label>
            <input id="age" onChange={ handleChange } type="text" value={ age } />
            <label style={styles.labelStyle}>Bilde</label>
            <input id="image" onChange={ handleChange } type="text" value={ image } />


            <input onClick={ createCharacter }  type="button" value="Legg til ny karakter"></input>

        </section>
    )
}

export default CreateCharacter;