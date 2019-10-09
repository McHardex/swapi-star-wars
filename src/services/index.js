import axios from 'axios';

class starWars {
  static getPeople() {
    return axios.get('https://swapi.co/api/people/');
  }

  static pagination(pageNumber) {
    return axios.get(`https://swapi.co/api/people/?page=${pageNumber}`);
  }
}

export default starWars;
