import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function NasaHolder() {
  const [mediaUrl, setMediaUrl] = useState([]);
  const [imgTitle, setImgTitle] = useState([]);
  const [imgDate, setImgDate] = useState([]);
  const [imgInfo, setImgInfo] = useState([]);

  console.log('use effect man');


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-01-01`)
        .then(res => {


    /////URL
          const mediaUrl = res.data.url;
          setMediaUrl(mediaUrl);

   ////TITLE
          const imgTitle = res.data.title;
          setImgTitle(imgTitle);

    ////DATE
          const imgDate = res.data.date;
          setImgDate(imgDate);

    ///EXPLANATION
          const imgInfo= res.data.explanation;
          setImgInfo(imgInfo);



        });
    }, []);
  
    return (
      <div className="cardHolder">
        <h2>{imgTitle}</h2>
        <p className='nasa-date'>{imgDate}</p>
        <img className='nasaImage' alt='Space'src={mediaUrl} style={{ maxWidth: "400px" }} />
        <p className='nasa-text'>{imgInfo}</p>
        <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p>
      </div>
    );
  }