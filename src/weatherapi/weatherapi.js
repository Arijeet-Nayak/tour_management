import React, { useEffect, useState } from 'react';

const Weatherapi = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default Weatherapi;