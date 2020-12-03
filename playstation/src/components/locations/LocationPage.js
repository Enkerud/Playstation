import React, { useEffect, useState } from 'react';

const LocationPage = ({ match }) => {
  const { params: { id } } = match;

  const [location, setLocation] = useState({ name: "Karakter" });
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
  }, [location, isFetched]);

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
      <h1>{location.name}</h1>
      <img src={location.image} style={styles.imgStyle}></img>
      <p>{location.game}</p>
      <p>{location.desc}</p>
      <p>{location.enemies}</p>
     
    </div>
  );
}

export default LocationPage;