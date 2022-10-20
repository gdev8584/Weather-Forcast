import React from 'react'
import {useGlobalContext} from '../../ContextApi/Context'
import Weather from '../../asserts/Weather'

const Card3 = () => {
    const {current} = useGlobalContext()
  return (
<div className="card text-center bg-info bg-gradient bg-opacity-25" style={{fontFamily: 'Fugaz One', height:"50vh"}}>
        <div>{Weather()}</div>
      {/* <img src={current.weather_icons} alt="weather-icon" className="card-img-top" style={{height: "40vh", width: "auto"}} /> */}
      <div className="card-body">
        <h2 className="card-title">{current.weather_descriptions}</h2>
      </div>
    </div>
  )
}

export default Card3