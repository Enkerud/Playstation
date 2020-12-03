import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const AdminUploadImage = () => {
    const [ imageFile, setImageFile ] = useState({});

  const handleChange = (e) => {
    setImageFile( e.target.files[0] );
  }

  const uploadImage = () => {
    let data = new FormData();
    data.append( "file", imageFile );
  }

  axios({
    method: "POST",
    url: "https://localhost:5001/games",
    data: uploadImage,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });

  return (
    // <div >
    //   <h3>Last opp bilde</h3>
    //   <label>Bilde</label>
    //   <input onChange={ handleChange } type="file" ></input>
    //   <input onClick={ uploadImage } type="button" value="Last opp bilde" ></input>
    // </div>
    //
    <></>);
}

export default AdminUploadImage;
