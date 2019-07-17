import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function NasaHolder() {
  // const [mediaUrl, setMediaUrl] = useState([]);
  // const [imgTitle, setImgTitle] = useState([]);
  // const [imgDate, setImgDate] = useState([]);
  // const [imgInfo, setImgInfo] = useState([]);

  const [data, setData] = useState({});

  console.log('use effect man');


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-01-01`)
        .then(res => {
          const data = res.data;
          setData(data);



  //   /////URL
  //         const mediaUrl = res.data.url;
  //         setMediaUrl(mediaUrl);

  //  ////TITLE
  //         const imgTitle = res.data.title;
  //         setImgTitle(imgTitle);

  //   ////DATE
  //         const imgDate = res.data.date;
  //         setImgDate(imgDate);

  //   ///EXPLANATION
  //         const imgInfo= res.data.explanation;
  //         setImgInfo(imgInfo);



        });
    }, []);
  
    return (
      <div className="cardHolder">
        <h2>{data.title}</h2>
        <p className='nasa-date'>{data.date}</p>
        <img className='nasaImage' alt='Space'src={data.url} style={{ maxWidth: "400px" }} />
        <p className='nasa-text'>{data.explanation}</p>
        <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p>
      </div>
    );
  }