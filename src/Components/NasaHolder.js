import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function NasaHolder() {

  const [data, setData] = useState({});
  const [date, setDate] = useState('2019-01-01');



    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => {
          const data = res.data;
          setData(data);
        });
    }, [date]);

    return (
      <div className="cardHolder">
        <button onClick={() => setDate("2019-01-02")}>01/02/2019</button>
        <button onClick={() => setDate("2019-01-03")}>01/03/2019</button>
        <h2>{data.title}</h2>
        <p className='nasa-date'>{data.date}</p>
        <img className='nasaImage' alt='Space'src={data.url} style={{ maxWidth: "400px" }} />
        <p className='nasa-text'>{data.explanation}</p>
        <p>Space and Science... and stuff---famous quote by gas station guy in Houston</p>
      </div>
    );
  }