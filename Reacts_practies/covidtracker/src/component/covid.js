import React, { useEffect,useState } from 'react';
import "./covid.css";

const Covid = () => {
    const[data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualData = await res.json()
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
          } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCovidData()
    }, []);

    return (
        <>
            <h1>LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            
       
       
            <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='card__name'> <span> INDIA</span> CONFORMED  </p>
                        <p className='card__total__small'>{data.confirmed}</p>
                        </div>
                    </div>
                </li>



            <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='card__name'> <span> INDIA </span> RECOVERED </p>
                        <p className='card__total__small'>{data.recovered}</p>
                        </div>
                    </div>
                </li>

           <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='card__name'> <span> INDIA </span> ACTIVE </p>
                        <p className='card__total__small'>{data.active}</p>
                        </div>
                    </div>
                </li>


            <li className='card'>
                    <div className='card__main'>
                        <div className='card__inner'>
                        <p className='card__name'> <span> INDIA </span> DEATHS </p>
                        <p className='card__total__small'>{data.deaths}</p>
                        </div>
                    </div>
                </li>


        </>
    )
}

export default Covid;