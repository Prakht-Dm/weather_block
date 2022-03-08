const block1=document.getElementById('content-1');
function whatWeather(event){
    event.preventDefault();
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = this.firstElementChild.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    loadJsonAndResponse(url)
    .then(answer=>{  
        alert(this.innerHTML);
        if (answer.cod === '404') alert(answer.message);      
        let tempP = document.createElement('p');
        tempP.className='tempP'; 
        tempP.innerHTML=`${Math.trunc((answer["main"]["temp"]-273.15)*10)/10}&#176`;      
        let weatherIcon = document.createElement('img');
        weatherIcon.className="weatherIcon";
        weatherIcon.setAttribute("src",`http://openweathermap.org/img/wn/${answer["weather"][0]["icon"]}@2x.png`);        
        let cityInner = document.createElement('p');
        cityInner.className="cityInner";
        cityInner=`${cityName}`;
        block1.innerHTML="";
        block1.prepend(cityInner);
        block1.prepend(weatherIcon);
        block1.prepend(tempP);       
        formName.firstElementChild.value="";
})
}
function loadJsonAndResponse(url) {
    return fetch(url)
    .then(response => response.json())
    }
    formName.addEventListener('submit', whatWeather);
