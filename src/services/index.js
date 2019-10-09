import axios from 'axios';

class starWars {
  static getPeople() {
    return axios.get('https://swapi.co/api/people/');
  }
}

export default starWars;
