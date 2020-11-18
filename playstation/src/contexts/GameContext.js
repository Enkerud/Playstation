import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ( props ) => {

    const [ game, setGame ] = useState( { id:"dummyId", name: "DummyGame", type: "DummyType" } );
    
    const [ games, setGames ] = useState([
        { id: "1616", name: "Astros Playroom", price: 0, image: "astro.jpg", 
        desc: "Prøv Playstation sine nye features med dette gratisspillet!", developer: "Sony Entertainment", 
        characters: "Astro", release: "19.11.2020", genre: "Family", location: "The Playroom" }
    ]); 

    useEffect( () => {
        const url = "https://localhost:5001/games";

        axios.get( url )
            .then( response => {
                setGames( response.data );
            } )
    }, [])

    return (
        <GameContext.Provider value={ { games: [ games, setGames ], game: [ game, setGame ] } } >
            { props.children }
        </GameContext.Provider>
    )

}


