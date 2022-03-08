export function changeTemperature(answer, changingBlock, cityName){      
    let tempP = document.createElement('p');
    tempP.className='tempP'; 
    tempP.innerHTML=`${Math.trunc((answer["main"]["temp"]-273.15)*10)/10}&#176`;      
    let weatherIcon = document.createElement('img');
    weatherIcon.className="weatherIcon";
    weatherIcon.setAttribute("src",`http://openweathermap.org/img/wn/${answer["weather"][0]["icon"]}@2x.png`);     
    let cityInner = document.createElement('p');
    cityInner.className="cityInner";
    cityInner=`${cityName}`; 
    changingBlock.innerHTML="";
    changingBlock.prepend(cityInner);
    changingBlock.prepend(weatherIcon);
    changingBlock.prepend(tempP);              
}
