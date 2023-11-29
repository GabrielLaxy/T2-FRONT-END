require('dotenv').config();
const axios = require('axios');

const {appid,q,country,cnt} = process.env;

const consulta_cord = async function() {
    const GeoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${q},${country}&limit=${cnt}&appid=${appid}`;
    const coordenadas = (await axios.get(GeoCoding)).data;
    let latitude = coordenadas[0]['lat'];
    let longitude = coordenadas[0]['lon'];
    console.log(`
                ╔════════════════════════════════════════════════╗
                ║                  Exercício 01                  ║
                ╚════════════════════════════════════════════════╝
                * Cidade: ${q}
                * País: ${country}
                * Latitude: ${latitude}
                * Longitude: ${longitude}
                ╔════════════════════════════════════════════════╗
                ║================================================║
                ╚════════════════════════════════════════════════╝
                `);
};

consulta_cord();

const clima_atual = async function() {
    const Current = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&appid=${appid}}`;
    const coordenadas2 = (await axios.get(GeoCoding)).data;
    let latitude2 = coordenadas2[0]['lat'];
    let longitude2 = coordenadas2[0]['lon'];
    const temperatura = (await axios.get(Current)).data;
        sensacao_term = temperatura.main.feels_like;
        desc = temperatura.weather[0].description;
        console.log(`
                ╔════════════════════════════════════════════════╗
                ║                  Exercício 02                  ║
                ╚════════════════════════════════════════════════╝
                * Cidade: ${q}                                 
                * País: ${country}
                * Sensação térmica: ${sensacao_term}
                * Descrição do clima: ${desc}
                ╔════════════════════════════════════════════════╗
                ║================================================║
                ╚════════════════════════════════════════════════╝
                `);
};
clima_atual();