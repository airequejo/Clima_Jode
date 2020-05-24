
const axios = require('axios');

const getLugarLatLgt = async ( dir) => {

const encodedUlr = encodeURI( dir );

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
    timeout: 1000,
    headers: {'x-rapidapi-key': '327133135cmsh9a5d22d64dc7619p10c290jsne313e79e9a3a'}
  });

  const  resp = await instance.get();

    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay Resultado para: ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
}

module.exports = {

    getLugarLatLgt
}


