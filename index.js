const axios = require('axios');

const appid=`ef0b0973b783e0614ac87612ec04344b`
const cidade=`Rome`
const pais=`IT`
const cnt =`1`

const GeoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade},${pais}&limit=${cnt}&appid=${appid}`;

const consulta_cord = async function() {
    const coordenadas = (await axios.get(GeoCoding)).data;
    let latitude = coordenadas[0]['lat'];
    let longitude = coordenadas[0]['lon'];
    console.log(`
        ╔════════════════════════════════════════════════╗
        ║                  Exercício 01                  ║
        ╚════════════════════════════════════════════════╝
        * Cidade: ${cidade}
        * País: ${pais}
        * Latitude: ${latitude}
        * Longitude: ${longitude}
        ╔════════════════════════════════════════════════╗
        ║================================================║
        ╚════════════════════════════════════════════════╝
    `);
};

const clima_atual = async function() {
    const coordenadas2 = (await axios.get(GeoCoding)).data;
    let latitude2 = coordenadas2[0]['lat'];
    let longitude2 = coordenadas2[0]['lon'];
    const Current = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&appid=${APPID}`;
    const temperatura = (await axios.get(Current)).data;
    sensacao_term = temperatura.main.feels_like;
    desc = temperatura.weather[0].description;
    console.log(`
        ╔════════════════════════════════════════════════╗
        ║                  Exercício 02                  ║
        ╚════════════════════════════════════════════════╝
        * Cidade: ${cidade}
        * País: ${pais}
        * Sensação térmica: ${sensacao_term}
        * Descrição do clima: ${desc}
        ╔════════════════════════════════════════════════╗
        ║================================================║
        ╚════════════════════════════════════════════════╝
    `);
};

consulta_cord();
clima_atual();