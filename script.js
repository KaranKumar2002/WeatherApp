document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const url = `http://api.weatherapi.com/v1/current.json?key=9a99cce5dff243daa13134845242110&q=${city}`
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
           
            return response.json();
        })
        .then(data => {

            console.log(data);
            
            const weather = `Temperature: ${data.current.temp_c}°C<br>
                            Humidity: ${data.current.humidity}%`;
            document.getElementById('weatherResult').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = error.message;
        });
});
