import React from "react";

function NasaCard( {imgUrl, imgTitle, imgInfo, imgDate } ) {

    return (
      <div className="nasaCard">
        <img className='nasaImage' alt='Space'src={imgUrl} style={{ maxWidth: "400px" }} />
        <p className='img-title'>{imgTitle}</p>
        <p className='img-date'>{imgDate}</p>
        <p className='img-info'>{imgInfo}</p>
        <p>Space and Science</p>
      </div>
    );
  }
  export default NasaCard;