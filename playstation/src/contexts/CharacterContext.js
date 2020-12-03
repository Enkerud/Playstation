import { useEffect, useState, createContext } from 'react';
import axios from 'axios';


export const CharacterContext = createContext();

export const CharacterProvider = ( props ) => {

    const [ character, setCharacter ] = useState( { id:"dummyId", name: "DummyCharacter", game: "DummyType" } );
    
    const [ characters, setCharacters ] = useState([
        { id: "1616", name: "Astro", age: 0, image: "astro.jpg", 
        desc: "Prøv Playstation sine nye features med dette gratisspillet!", game: "Sony Entertainment", 
        alias: "Astro", weapon: "19.11.2020"}
    ]); 

    useEffect( () => {
        const url = "https://localhost:5001/characters";

        axios.get( url )
            .then( response => {
                setCharacters( response.data );
            } )
    }, [])

    return (
        <CharacterContext.Provider value={ { characters: [ characters, setCharacters ], character: [ character, setCharacter ] } } >
            { props.children }
        </CharacterContext.Provider>
    )

}

export default CharacterProvider;


