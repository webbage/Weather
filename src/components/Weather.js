import React from "react"
import axios from "axios";


function Weather() {

    let [city, setCity] = React.useState("kuwait");

    let [weather, setWeather] = React.useState({
        name: "",
        temp:"",
        des:""
    });

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b6ceef33acfc540f9c9c91f582ff4bdd&units=metric";
     
    function handleChange(event) {
        const {value} = event.target;
        setCity(value);
      }

     function handleClick(event){
       event.preventDefault();
       axios
       .get(url)
       .then(res => { setWeather({name:res.data.name, temp: res.data.main.temp, des:res.data.weather[0].description}) })
     }

    return (

    <div className='wrapper'>
        <div>
          <form className="formDiv">
            <input
              className="input"
              onChange={handleChange}
              placeholder="Paris"
            />
            <button onClick={handleClick} > Add </button>
          </form>
        </div>

<div id="weather_wrapper">
	<div class="weatherCard">
		<div class="currentTemp">
			<span class="temp">{weather.temp}</span>
			<span class="location">{weather.name}</span>
		</div>
		<div class="currentWeather">
			<span class="conditions">&#xf00d;</span>
			<div class="info">
				<h3 className="h3Info">{weather.des}</h3>
			</div>
		</div>
	</div>
</div>
</div>

      )} 

export default Weather;


