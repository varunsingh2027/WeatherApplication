let btn = document.querySelector(".searchBtn");
let inp = document.querySelector(".searchBar");
let city ="";

btn.addEventListener("click",()=>{
    city = inp.value;
    getWeather(city).catch((err) => {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    });
})



async function getWeather(city){
    const apiKey= "fbe981722e844bb38f4114014252402";

const apiUrl=  "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q="+city;

    const response = await fetch(apiUrl);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

    if(data.current.condition.text == "Sunny"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";}
    else if(data.current.condition.text == "Partly cloudy"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/4814/4814489.png";}
    else if(data.current.condition.text == "Cloudy"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/414/414927.png";}
    else if(data.current.condition.text == "Overcast"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/3075/3075858.png";}    
    else if(data.current.condition.text == "Mist"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/1197/1197102.png";}
    else if(data.current.condition.text == "Moderate rain"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/3093/3093390.png";}
    else if(data.current.condition.text == "Rain"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/1146/1146799.png";}
    else if(data.current.condition.text == "Light rain"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/4735/4735072.png";}
    else if(data.current.condition.text == "Snow"){
        document.querySelector(".weatherIcon").src = "https://cdn-icons-png.flaticon.com/128/2315/2315309.png";}    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
   }

}
