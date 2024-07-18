const search = document.querySelector('.search-box button');
const weatherImage = document.querySelector('.box-weather .info img');
const temperatureElement = document.querySelector('.box-weather .temperature');
const descriptionElement = document.querySelector('.box-weather .description');

search.addEventListener('click', () => {
    const APIKey = '2cb11e8d4f49b5f0e87a7889e826cfbe';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('Weather data:', data);

            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const mainWeather = data.weather[0].main.toLowerCase();

            temperatureElement.textContent = `${temperature}°C`;
            descriptionElement.textContent = description;

            let imageName = 'cloud.png';
            if (mainWeather === 'clear') imageName = 'clear.png';
            if (mainWeather === 'rain') imageName = 'rain.png';
            if (mainWeather === 'snow') imageName = 'snow.png';
            if (mainWeather === 'mist' || mainWeather === 'haze') imageName = 'mist.png';

            weatherImage.src = `images/${imageName}`;
            console.log('Image set to:', `images/${imageName}`);
        })
        .catch(error => console.error('Error:', error));
});