import axios from 'axios';

class characters {
  static getPeople() {
    return axios.get('https://swapi.co/api/people/');
  }

  static getSingleCharacter(id) {
    return axios.get(`https://swapi.co/api/people/${id}`);
  }

  static pagination(pageNumber) {
    return axios.get(`https://swapi.co/api/people/?page=${pageNumber}`);
  }

  static search(value) {
    return axios.get(`https://swapi.co/api/people/?search=${value}`);
  }

  static getPlanet(url) {
    return axios.get(url);
  }
}

export default characters;
