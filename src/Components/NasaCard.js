import React from "react";

function NasaCard( {imgUrl, imgTitle, imgInfo, imgDate } ) {

    return (
      <div className="nasaCard">
        <img className='nasaImage' src={imgUrl} style={{ maxWidth: "400px" }} />
        <p className='img-title'>{imgTitle}</p>
        <p className='img-date'>{imgDate}</p>
        <p className='img-info'>{imgInfo}</p>
        <p>Nasa Card</p>
      </div>
    );
  }
  export default NasaCard;