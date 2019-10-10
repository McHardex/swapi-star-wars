import axios from 'axios';

class starShips {
  static getStarShips() {
    return axios.get('https://swapi.co/api/starships/');
  }

  static paginateStarShips(pageNumber) {
    return axios.get(`https://swapi.co/api/starships/?page=${pageNumber}`);
  }

  static searchStarShips(value) {
    return axios.get(`https://swapi.co/api/starships/?search=${value}`);
  }
}

export default starShips;
