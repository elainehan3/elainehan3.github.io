import React from "react";
import './weather.scss';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';

function WeatherHead(props) {
  return (
    <div className={props.displayComponent ? "weather-card-wrapper display" :  "weather-card-wrapper"}>
    {props.error && <div role="alert" className="error">{props.error}</div>}
    {props.badCountryNameError && <div role="alert" className="error">{props.badCountryNameError}</div>}
    <div className={(!props.error && !props.badCountryNameError && props.country && props.temperature && props.city) ? "weather-card display" :  "weather-card"}>
        <div className="weather-head">
          {props.city && props.country && props.temperature &&
            <div className="data-main">
              <p className="location"> {props.city}, {props.country}</p>
              <div className="temp-container">
                <img className="weather-icon" alt={props.condition} src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} />
                <p className="temp">{props.temperature}<sup className="degree">o</sup></p>
              </div>
              <p className="condit">{props.condition}</p>
            </div>
          }
        </div>
        <div className="weather-details">
          {props.humidity && props.condition && props.wind[0] && props.wind[1] &&
            <div>
              <p className="weather-stat"><AirIcon className="icon" /><span className="stat-title">Wind:</span> {props.wind[0]} km/h</p>
              <p className="weather-stat"><OpacityIcon className="icon" /><span className="stat-title">Humidity:</span> {props.humidity} %</p>
              <p className="weather-stat"><CompressIcon className="icon" /><span className="stat-title">Pressure:</span> {props.pressure} hPa</p>

            </div>
          }
        </div>
      </div>
    </div>
  );
  // if (!props.displayComponent) {
  //   return (
  //     <div className="weather-card"></div>
  //   );
  // } else if (props.error) {
  //   return (
  //     <div role="alert" className="error">{props.error}</div>
  //   );
  // } else if (props.badCountryNameError) {
  //   return (
  //     <div role="alert" className="error">{props.badCountryNameError}</div>
  //   );
  // } else if (!props.temperature) {
  //   return (
  //     <div className="weather-card"></div>
  //   );
  // } else {
  //   return (
      // <div className="weather-card display">
      //   <div className="weather-head">
      //     {/* add conditional operator for only rendering data if user click submit btn */}
      //     {props.city && props.country && props.temperature &&
      //       <div className="data-main">
      //         <p className="location"> {props.city}, {props.country}</p>
      //         <div className="temp-container">
      //           <img className="weather-icon" alt={props.condition} src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`} />
      //           <p className="temp">{props.temperature}<sup className="degree">o</sup></p>
      //         </div>
      //         <p className="condit">{props.condition}</p>
      //       </div>
      //     }
      //   </div>
      //   <div className="weather-details">
      //     {props.humidity && props.condition && props.wind[0] && props.wind[1] &&
      //       <div>
      //         <p className="weather-stat"><AirIcon className="icon" /><span className="stat-title">Wind:</span> {props.wind[0]} km/h</p>
      //         <p className="weather-stat"><OpacityIcon className="icon" /><span className="stat-title">Humidity:</span> {props.humidity} %</p>
      //         <p className="weather-stat"><CompressIcon className="icon" /><span className="stat-title">Pressure:</span> {props.pressure} hPa</p>

      //       </div>
      //     }
      //   </div>
      // </div>
  //     //</div>
  //   );
  // }
}


export default WeatherHead;