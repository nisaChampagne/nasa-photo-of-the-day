import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

import { thisExpression } from '@babel/types';


export default function NasaContainer() {
  const axios = require('axios')
  const [spacePhoto, setSpacePhoto] = useState([]);
  const [spaceTitle, setSpaceTitle] = useState([]);
  const [date, setDate] = useState([]);
  const [info, setInfo] = useState([]);



    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=2019-07-17`)
        .then(res => {
          const imgUrl = res.data.url;
          console.log(imgUrl);
          const imgTitle = res.data.title;
          console.log(imgTitle);
          const imgDate = res.data.date;
          console.log(imgDate);
          const imgInfo= res.data.explanation;
          console.log(imgInfo);

        });
    }, []);
  
    return (
      <div className="nasa-container">
        <button >This Button</button>
        <button>That Button</button>
         <NasaCard  key={spacePhoto} imgUrl={spacePhoto} imgTitle={spaceTitle} imgDate={date} imgInfo={info}/>
      </div>
    );
  }