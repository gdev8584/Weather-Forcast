import React from 'react'
import {useGlobalContext} from '../../ContextApi/Context'

const Card2 = () => {
    const {current} = useGlobalContext()
  return (
    <div className="card bg-warning bg-opacity-25" style={{fontFamily: 'Fugaz One', height:"50vh"}}>
      <div className="card-body text-center mt-5">
        <h1 className="card-title pt-5" style={{fontSize: 100}}>{current.temperature} <sup>°C</sup></h1>
        <h5 className="card-text my-1">😎 Feels Like: {current.feelslike} °C</h5>
        <h5 className="card-text mt-3">🌄 Wind: {current.wind_dir} {current.wind_speed}mi/h</h5>
      </div>
    </div>
  )
}

export default Card2