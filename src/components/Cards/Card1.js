import React from 'react'
import getCurrentDay from '../../asserts/Weekday'
import {useGlobalContext} from '../../ContextApi/Context'

const Card1 = () => {
    const {location} = useGlobalContext()
  
  const date = new Date(location.localtime).toLocaleDateString()
  let timeh = new Date(location.localtime).getHours()
  if(timeh<10){
    timeh = '0'+ timeh
  }
  let timem = new Date(location.localtime).getMinutes()
  if(timem<10){
    timem = "0" + timem;
  }
  return (
    <div className="card bg-success bg-opacity-25" style={{fontFamily: 'Fugaz One', height: "50vh"}}>
      <div className="card-body text-center mt-5">
        <h5 className="card-title">{getCurrentDay()}</h5>
        <h3 className="card-title mt-4">{date}</h3>
        <p className="card-text" style={{fontSize: 100}}>{timeh}:{timem}</p>
      </div>
    </div>
  )
}

export default Card1