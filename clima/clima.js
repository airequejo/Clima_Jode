

const axios = require('axios');

const getClima = async ( lat, lng ) => {

   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=974042e8fd193b9373836a49dddc4267&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}