import React, { useState, useEffect } from "react";
import axios from 'axios';

const ArtWidget = ({theme}) => {
  const [artwork, setArtWork] = useState("");

  useEffect(() => {
      console.log('making request');
    axios
      .get(
        `http://api.giphy.com/v1/gifs/random?tag=${theme}&api_key=pKBX4c1g1ZdHE4d6OdqerS8IH1LtwuwI`
      )
      .then((response) => {
          setArtWork(response.data.data.images.downsized_large.url);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <img
        className="artwork"
        src={artwork}
        alt="Retro Artwork"
      />
    </div>
  );
};

export default ArtWidget;
