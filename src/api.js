// base url
const base_url = 'https://api.rawg.io/api/'

// api key
const api_key = '1f79d6f0fd40400194270c472c76fd55';

// getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  
  if (month < 10) {
    return `0${month}`
  } else {
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate();
  
  if (day < 10) {
    return `0${day}`
  } else {
    return day;
  }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentMonth}-${currentDay}-${currentYear}`;
const lastYear = `${currentDay}-${currentMonth}-${currentYear - 1}`;
const nextYear = `${currentDay}-${currentMonth}-${currentYear + 1}`;

// popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;