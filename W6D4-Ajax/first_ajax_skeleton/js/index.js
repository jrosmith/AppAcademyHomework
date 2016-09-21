console.log("HELLO FROM THE JAVASCRIPT CONSOLE!");

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log(`Weather for ${data.name}:`);
    console.log(`It is ${Math.floor(data.main.temp - 273.15)} degrees Celsius with ${data.weather[0].description}.`);
  }
});

console.log('Outside of AJAX request');
