import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

//TODO: MASSE HER; IKKE SIKKERT DET FUNKER RIKTIG MED OPPLASTNING OSV.  

export const CharacterContext = createContext();

export const CharacterProvider = ( props ) => {

    const [ character, setCharacter ] = useState( { id:"dummyId", name: "DummyCharacter", type: "DummyType" } );
    
    const [ characters, setCharacters ] = useState([
        { id: "1616", name: "Astros Playroom", price: 0, image: "astro.jpg", 
        desc: "Prøv Playstation sine nye features med dette gratisspillet!", developer: "Sony Entertainment", 
        characters: "Astro", release: "19.11.2020", genre: "Family", location: "The Playroom" }
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


