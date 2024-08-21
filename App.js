import React,{useState} from "react";
import axios from 'axios';

function App() {
  let [data,setData]=useState('');
  let [location,setLocation]=useState('');

const url=`https://api.weatherapi.com/v1/current.json?key=708cd70cf9fb4fa4b95171005242706&q=${location}&aqi=yes
`
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data)
      });
    }
  }

   
  return (
    <div className="App">
      <div className="search">
        <input type="text" value={location} placeholder="Enter City!"
        onChange={event=>setLocation(event.target.value)}
        onKeyUp={searchLocation}>
        </input>
      </div>
      <div className="city">
        {data.location? <h2>{data.location.name}</h2>:null}
        {/* <h2>{location}</h2> */}
      </div>
      <div className="temp">
      
      {data.current? <h2>{data.current.temp_c}°C</h2>:null}
      {data.current? <h2>{data.current.temp_f}°F</h2>:null}


        {/* <h2>21.5 °C</h2>
        <h2>70.6 °F</h2> */}
      </div>
      <div className="condition">
      {data.current? <h2>{data.current.condition.text}</h2>:null}
     

        {/* <h3>Partly Cloudy</h3> */}
      </div>
      <div className="bottom">
        <div className="wind">
        {data.current? <h2>{data.current.wind_kph}KPH</h2>:null}
      
          {/* <h4>14.4 KPH</h4> */}
          <h4>Wind speed</h4>
          </div>
        <div className="humidity">
        {data.current? <h2>{data.current.humidity}%</h2>:null}
   
          {/* <h4>87%</h4> */}
          <h4>Humidity</h4>
          </div>
        <div className="clouds">
        {data.current? <h2>{data.current.cloud}%</h2>:null}
      
          {/* <h4>30%</h4> */}
          <h4>Cloud cover</h4>
          
          </div>
        
      </div>
      <div className="bottom1">
      {data.current? <h5>{data.current.last_updated}</h5>:null}
       
       {/* <h5>last_updated</h5> */}
        <h5>last_updated</h5>
      </div>
    </div>
  );
}

export default App;
