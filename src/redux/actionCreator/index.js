import { GET_PEOPLE, GET_PEOPLE_SUCCESS } from '../constants/actionTypes';

export const getPeople = () => ({
  type: GET_PEOPLE
});

export const getPeopleSuccess = (people, count) => ({
  type: GET_PEOPLE_SUCCESS,
  people,
  count
});
