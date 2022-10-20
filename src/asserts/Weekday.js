const getCurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tueday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let currentTime = new Date();
    return(weekday[currentTime.getDay()])
 };
 export default getCurrentDay