import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';


export default function NasaContainer() {
  const [imgUrl, setImgUrl] = useState([]);
  const [imgTitle, setImgTitle] = useState([]);
  const [imgDate, setImgDate] = useState([]);
  const [imgInfo, setImgInfo] = useState([]);



    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          const imgUrl = res.data.url;
          console.log(imgUrl);
          const imgTitle = res.data.title;
          console.log(imgTitle);
          const imgDate = res.data.date;
          console.log(imgDate);
          const imgInfo= res.data.explanation;
          console.log(imgInfo);
          setImgUrl(imgUrl);
          setImgTitle(imgTitle);
          setImgDate(imgDate);
          setImgInfo(imgInfo);
        });
    }, []);
  
    return (
      <div className="nasa-container">
         <NasaCard  key='1055' imgUrl={imgUrl} imgTitle={imgTitle} imgDate={imgDate} imgInfo={imgInfo}/>
      </div>
    );
  }