import {useGlobalContext} from '../ContextApi/Context'



const Weather = () =>{
    const {current} = useGlobalContext();
    if(current.weather_descriptions === 'Sunny'){
        return (<i className="fas fa-sun my-4" style={{fontSize:200, color: "orange"}}></i>)
    }else if(current.weather_descriptions === 'Clouds'){
        return (<i className="fas fa-cloud my-4" style={{fontSize:200, color: "#f1f2f6"}}></i>)
    }else if(current.weather_descriptions === 'Rainy'){
        return (<i className="fas fa-rain my-4" style={{fontSize:200, color: "#a4b0be"}}></i>)
    }else if(current.weather_descriptions === 'Clear'){
        return (<i className="fas fa-sun my-4" style={{fontSize:200, color: "orangered"}}></i>)
    }else{
        return (<i className="fas fa-cloud my-4" style={{fontSize:200, color: "#f1f2f6"}}></i>)
    }
}
export default Weather
