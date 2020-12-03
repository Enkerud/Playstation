import LocationItem from './LocationItem';
import React, { useEffect, useState } from 'react';


const LocationPage = ({ match, location }) => {
  const { params: { id } } = match;

  const [locations, setLocation] = useState({ name: "Karakter" });
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (! isFetched) {
      fetch(`https://localhost:5001/locations/${id}`, {}) // må hente id fra params
        .then((response) => response.json())
        .then((responseJSON) => {
          
          setIsFetched(true)
          setLocation(responseJSON);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [locations, isFetched]);

  const styles = {
    textStyle: {
        textAlign: 'center',
        margin: '1em',
        width: 'auto',
        color: 'white'
    },
    imgStyle: {
      width: "100%",
      maxWidth: "800px"
  }};

  

 


  return (
    <div style={styles.textStyle}>
      <h1>{locations.name}</h1>
      <img src={locations.image} style={styles.imgStyle}></img>
      <p>{locations.game}</p>
      <p>{locations.desc}</p>
      <p>{locations.enemies}</p>
     
    </div>

  );
}


export default LocationPage;