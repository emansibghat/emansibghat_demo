const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.box-weather');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '2cb11e8d4f49b5f0e87a7889e826cfbe';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                console.log('City not found');
                return;
            }

            const image = document.querySelector('.box-weather img');
            const temperature = document.querySelector('.box-weather .temperature');
            const description = document.querySelector('.box-weather .description');
            const humidity = document.querySelector('.weather-details .humidity  span');
            const wind = document.querySelector('.weather-details .wind .info-wind span');
            
            console.log('Weather condition:', json.weather[0].main);
            
            let imageSrc;
            switch (json.weather[0].main.toLowerCase()) {
                case 'clear':
                    imageSrc = 'images/clear.png';
                    break;
                case 'rain':
                    imageSrc = 'images/rain.png';
                    break;
                case 'snow':
                    imageSrc = 'images/snow.png';
                    break;
                case 'clouds':
                    imageSrc = 'images/cloud.png';
                    break;
                case 'mist':
                    imageSrc = 'images/mist.png';
                    break;
                case 'haze':
                    imageSrc = 'images/haze.png';
                    break;
                default:
                    imageSrc = 'images/cloud.png';
            }
            
            console.log('Setting image source to:', imageSrc);
            image.src = imageSrc;
            image.onerror = function() {
                console.error('Failed to load image:', imageSrc);
                this.src = 'images/default.png'; // Set a default image
            };

            temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
            description.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${Math.round(json.wind.speed)}km/hr`;

            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'flex';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    });