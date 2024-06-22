const apiKey = "14278239589d04a0dbdcd5f580d274cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=indore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json();
    
    console.log (data)
}

checkWeather();