
const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.dureccion);

// lugar.getLugarLatLgt ( argv.direccion )
//     .then( console.log)

// clima.getClima( -6.0357252, -77.0032175 )
//     .then(console.log)
//     .catch(console.log);

const getInfo = async ( direccion ) => {

   try { const coords = await lugar.getLugarLatLgt( direccion );
    const temp = await clima.getClima( coords.lat, coords.lng );

        return `El clima de ${coords.direccion } es de ${ temp }`;

    } catch (e) {

        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo( argv.direccion )
        .then( console.log)
        .catch( console.log);