import React, {  useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const WeatherComp = () => {

    const [cityName, setCityName] = useState('')
    const [feelsLike, setFeelsLike] = useState()
    const [temp, setTemp] = useState()
    const [humidity, setHumidity] = useState()
    const [description, setDescription] = useState()


    
    useEffect ( () => {
        async function getCity(){

            const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2bcdebe94c941738278d785799c0884c&units=metric`)
            const data = await apiRes.json();
            console.log(data);
            setFeelsLike(data.main.feels_like)
            setTemp(data.main.temp)
            setHumidity(data.main.humidity)
            setDescription(data.weather[0].description)
        }
        getCity();
    },[cityName])


    const handleChange = (e) => {
        setCityName(e.target.value)
        console.log(cityName) 
    }
    
    if (cityName === ''){
        return(
            <div>
              <div className='serch'>
                
                <h3>Enter City Name</h3>
                
                <TextField id="standard-basic"
                 label="Enter City Name"
                  variant="standard"
                  onChange={handleChange}
                   value={cityName} />

            </div>
            </div>
        )
    }
      
        return(
            <div>
            <div className='serch'>
                
            <h3>Enter City Name</h3>
            <TextField id="standard-basic"
                 label="Enter City Name"
                  variant="standard"
                  onChange={handleChange}
                   value={cityName} />
            <Button 
            style={{
                marginBottom: "-25px",
                marginLeft: "10px",
                Height: "320px",
            }}
            variant="contained"
            onClick={() => setCityName('')}
            >Clear</Button>


        </div>

        <div className='card'>
            <h4>{cityName}</h4>
            <h4> Feels like: {feelsLike}°C</h4>
            <h4>Temperature: {temp}°C</h4>
            <h4>Humidity: {humidity}%</h4>
            <h4>{description}</h4>


        </div>
        </div>
        )
    
}

export default WeatherComp