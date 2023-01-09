import React, {useState} from 'react';
import axios from 'axios';


function App() {
  //used for data
  const [data, setData] = useState({});
  //used for specific location 
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(url).then((response) =>{
        setData(response.data);
        console.log(response.data);
      })
      //sets it to empty string
      setLocation("");
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        type = "text"
        value = {location}
        onChange = {event => setLocation(event.target.value)}
        //calls location
        onKeyDown =  {searchLocation}
        placeholder = "Enter Location"/>
      </div>
      <div className="container">
        <div className = "top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {/* gets around null error as*/}
            {data.main ? <h1>{data.main.temp}°C</h1> : null} 
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        
        {/* makes bottom information only show once city is inputted */}
        {data.main != undefined  &&
          <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed} KM/H</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
