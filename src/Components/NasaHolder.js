import React, {useState, useEffect} from 'react';
import NasaCard from './NasaCard';
import { Button, Segment } from 'semantic-ui-react';
import axios from 'axios';



export default function NasaHolder() {

  const [data, setData] = useState({});
  const [date, setDate] = useState('2019-01-01');


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=KwcckJGIqavWg7CLaqmH1nj6I2TBbwNnHagiZa1R&date=${date}`)
        .then(res => {
          const data = res.data;
          setData(data);
        });
    }, [date]);

    return (
      <div className="cardHolder">
          <Segment inverted>
            <Button basic inverted onClick={() => setDate("2019-01-01")}>
              2019-01-01
            </Button>
            <Button basic inverted color='red' onClick={() => setDate("2019-01-02")}>
              2019-01-02
            </Button>
            <Button basic inverted color='orange' onClick={() => setDate("2019-01-03")}>
              2019-01-03
            </Button>
            <Button basic inverted color='yellow' onClick={() => setDate("2019-01-04")}>
              2019-01-04
            </Button>
            <Button basic inverted color='olive' onClick={() => setDate("2019-01-05")}>
              2019-01-05
            </Button>
            <Button basic inverted color='green' onClick={() => setDate("2019-01-06")}>
              2019-01-06
            </Button>
            <Button basic inverted color='teal' onClick={() => setDate("2019-01-07")}>
              2019-01-07
            </Button>
            <Button basic inverted color='blue' onClick={() => setDate("2019-07-18")}>
              2019-07-18
            </Button>
          </Segment>
        {data ? <NasaCard title={data.title}
                           url={data.url}
                           explanation={data.explanation}
                           date={data.date} />
               : <div> Oops one second </div>}
        {/* <h2>{data.title}</h2>
        <p className='nasa-date' >{data.date}</p>
        <img className='nasaImage' alt='Space' src={data.url} style={{ maxWidth: "400px"}} />
        <p className='nasa-text' >{data.explanation}</p>
        <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p> */}
      </div>
    );
  }