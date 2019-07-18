import React, {useState, useEffect} from 'react';
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
        <button onClick={() => setDate("2019-01-01")}>01/01/2019</button>
        <button onClick={() => setDate("2019-01-02")}>01/02/2019</button>
        <button onClick={() => setDate("2019-01-03")}>01/03/2019</button>
        <button onClick={() => setDate("2019-01-04")}>01/04/2019</button>
        <button onClick={() => setDate("2019-01-05")}>01/05/2019</button>
        <button onClick={() => setDate("2019-01-06")}>01/06/2019</button>
        <button onClick={() => setDate("2019-01-07")}>01/07/2019</button>

        <h2 style={{color: 'white'}}>{data.title}</h2>
        <p className='nasa-date' style={{color: 'white'}}>{data.date}</p>
        <img className='nasaImage' alt='Space'style={{color: 'white' }} src={data.url} style={{ maxWidth: "400px" }} />
        <p className='nasa-text' style={{color: 'white'}}>{data.explanation}</p>
        <p style={{color: 'white'}}>Space and Science... and stuff---famous quote by gas station guy in Houston</p>
      </div>
    );
  }