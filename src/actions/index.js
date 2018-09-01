const API_KEY = "e658178f1c6fefa447d22a290447dfee";

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER,
        
    };
}