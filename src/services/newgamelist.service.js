import axios from "axios";

export const getNewGameList = (callback) => {
  axios
    .get(
      "https://api.rawg.io/api/games?dates=2024-01-01,2024-10-31&ordering=-rating&ordering=-added&page_size=50&key=69dce11161584a0ab6592137c5091871"
    )
    .then((response) => {
      callback(response.data || []);
    })
    .catch((error) => {
      callback(error.data);
    });
};