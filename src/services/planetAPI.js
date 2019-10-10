import axios from 'axios';

class planets {
  static getPlanets() {
    return axios.get('https://swapi.co/api/planets/');
  }

  static paginatePlanet(pageNumber) {
    return axios.get(`https://swapi.co/api/planets/?page=${pageNumber}`);
  }

  static searchPlanet(value) {
    return axios.get(`https://swapi.co/api/planets/?search=${value}`);
  }
}

export default planets;
