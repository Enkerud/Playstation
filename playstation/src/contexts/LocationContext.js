import { useEffect, useState, createContext } from 'react';
import axios from 'axios';


export const LocationContext = createContext();

export const LocationProvider = ( props ) => {

    const [ location, setLocation ] = useState( { id:"dummyId", name: "Dummylocation", game: "DummyType" } );
    
    const [ locations, setLocations ] = useState([
        { id: "1616", name: "Astro", image: "astro.jpg", 
        desc: "Prøv Playstation sine nye features med dette gratisspillet!", game: "Sony Entertainment", }
    ]); 

    useEffect( () => {
        const url = "https://localhost:5001/locations";

        axios.get( url )
            .then( response => {
                setLocations( response.data );
            } )
    }, [])

    return (
        <LocationContext.Provider value={ { locations: [ locations, setLocations ], location: [ location, setLocation ] } } >
            { props.children }
        </LocationContext.Provider>
    )

}

export default LocationProvider;


