import React, {useState, useEffect} from 'react';
import NasaCard from './NasaCard';
import { Button, Segment } from 'semantic-ui-react';
import { CardHolder } from "./StyledWidgets.js";

import axios from 'axios';



export default function NasaHolder() {

  const [data, setData] = useState({});
  const [date, setDate] = useState('2019-07-11');


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=KwcckJGIqavWg7CLaqmH1nj6I2TBbwNnHagiZa1R&date=${date}`)
        .then(res => {
          const data = res.data;
          setData(data);
        });
    }, [date]);

    return (
      <CardHolder>
          <Segment inverted color='orange'>
          <Button basic inverted color='olive' onClick={() => setDate("2019-07-09")}>
              2019-07-09
            </Button>
            <Button basic inverted onClick={() => setDate("2019-07-11")}>
              2019-07-11
            </Button>
            <Button basic inverted color='olive' onClick={() => setDate("2019-07-12")}>
              2019-07-12
            </Button>
            <Button basic inverted color='green' onClick={() => setDate("2019-07-13")}>
              2019-07-13
            </Button>
            <Button basic inverted color='blue' onClick={() => setDate("2019-07-14")}>
              2019-07-14
            </Button>
            <Button basic inverted onClick={() => setDate("2019-07-15")}>
              2019-07-15
            </Button>
            <Button basic inverted color='green' onClick={() => setDate("2019-07-18")}>
              2019-07-18
            </Button>
          </Segment>
            <NasaCard   title={data.title}
            url={data.url}
            explanation={data.explanation}
            date={data.date} />
        {/* <h2>{data.title}</h2>
        <p className='nasa-date' >{data.date}</p>
        <img className='nasaImage' alt='Space' src={data.url} style={{ maxWidth: "400px"}} />
        <p className='nasa-text' >{data.explanation}</p>
        <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p> */}
      </CardHolder>
    );
  }