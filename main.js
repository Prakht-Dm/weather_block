import {
    changeTemperature
} from './view.js';

import {
    loadJsonAndResponse
} from './loadinfo.js';

const block1=document.getElementById('content-1');
const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';

function whatWeather(event){
    event.preventDefault();   
    const cityName = this.firstElementChild.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${SERVER_URL}?q=${cityName}&appid=${apiKey}`;
    loadJsonAndResponse(url)
    .then(answer=>{  changeTemperature(answer, block1 ,cityName);
}).catch(alert);
formName.firstElementChild.value="";
}

    formName.addEventListener('submit', whatWeather);