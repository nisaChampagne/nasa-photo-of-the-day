import React from "react";

function NasaCard( {mediaUrl, imgTitle, imgInfo, imgDate } ) {

    return (
      <div className="nasaCard">
        <img className='nasaImage' alt='Space'src={mediaUrl} style={{ maxWidth: "400px" }} />
        <p className='img-title'>{imgTitle}</p>
        <p className='img-date'>{imgDate}</p>
        <p className='img-info'>{imgInfo}</p>
        <p>Space and Science---famous quote by gas station guy in Houston</p>
      </div>
    );
  }
  export default NasaCard;