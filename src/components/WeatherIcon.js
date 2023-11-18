import React from 'react';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from "react-icons/fa6";
import { WiDayCloudy, WiDayRain, WiNightAltRain, WiDayThunderstorm, WiNightThunderstorm } from "react-icons/wi";
import { BsCloudMoon, BsCloudFill, BsFillCloudsFill, BsCloudRainFill  } from "react-icons/bs";

const WeatherIcon = ({ iconCode }) => {
    switch (iconCode) {
        case '01d':
        case 'c01d':
            return <MdWbSunny />;
        case '01n':
        case 'c01n':
            return <FaMoon />;
        case '02d':
        case 'c02d':
            return <WiDayCloudy />;
        case '02n':
        case 'c02n':
            return <BsCloudMoon />;
        case '03d':
        case '03n':
            return <BsCloudFill />;
        case '04d':
        case '04n':
        case 'c03d':
        case 'c03n':
        case 'c04d':
        case 'c04n':
            return <BsFillCloudsFill />;
        case '09d':
        case '09n':
        case 'u00d':
        case 'u00n':
        case 's06d':
        case 's06n':
        case 's02d':
        case 's03d':
        case 's03n':
        case 'r02n':
        case 's02n':
        case 'r02d':
        case 'r06d':
        case 'r03d':
        case 'r03n':
        case 'r04d':
        case 'f01d':
        case 'r01n':
        case 'r01d':
        case 'd03d':
        case 'd03n':
        case 'd02d':
        case 'd02n':
        case 'd01d':
        case 'd01n':
            return <BsCloudRainFill />;
        case '10d':
        case 's01d':
        case 's04d':
        case 'r05d':
            return <WiDayRain  />;
        case '10n':
        case 's01n':
        case 's04n':
        case 'r06n':
        case 'r04n':
            return <WiNightAltRain  />;
        case '11d':
        case 't01d':
        case 't02d':
        case 't03d':
        case 't04d':
        case 't05d':
            return <WiDayThunderstorm  />;
        case '11n':
        case 't01n':
        case 't02n':
        case 't03n':
        case 't04n':
        case 't05n':
            return <WiNightThunderstorm  />;
        default:
            return <MdWbSunny />;
    }
};

export default WeatherIcon;
