import axios from 'axios';

class starWars {
  static getPeople() {
    return axios.get('https://swapi.co/api/people/');
  }

  static pagination(pageNumber) {
    return axios.get(`https://swapi.co/api/people/?page=${pageNumber}`);
  }

  static search(value) {
    return axios.get(`https://swapi.co/api/people/?search=${value}`);
  }
}

export default starWars;
