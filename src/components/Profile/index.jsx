import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacterById,
  fetchCharacterPlanet
} from '../../redux/actionCreator/people';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import { getPeople } from '../../redux/actionCreator/people';
import Loader from '../shared/Loader';
import image from '../../images/character-1.jpg';
import './index.scss';

const Profile = ({
  match,
  fetchCharacterById,
  fetchCharacterPlanet,
  getPeople,
  character,
  characters,
  planet,
  isLoading
}) => {
  useEffect(() => {
    const {
      params: { id }
    } = match;
    fetchCharacterById(id);
    fetchCharacterPlanet(character.homeworld);
    getPeople();
  }, [
    fetchCharacterById,
    fetchCharacterPlanet,
    getPeople,
    match,
    character.homeworld
  ]);

  const limitCharacters = characters.slice(0, 3);
  return (
    <div>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div>
          <Header transition name={character.name} />
          <div className="profile-cont">
            <div className="profile-content">
              <h1 className="name">{character.name}</h1>
              <p>
                Height: <span>{character.height}</span>
              </p>
              <p>
                Mass: <span>{character.mass}</span>
              </p>
              <p>
                Hair Color: <span>{character.hair_color}</span>
              </p>
              <p>
                Skin Color: <span>{character.skin_color}</span>
              </p>
              <p>
                Eye Color: <span>{character.eye_color}</span>
              </p>
              <p>
                Gender: <span>{character.gender}</span>
              </p>
            </div>
            <div className="profile-content">
              <h1 className="name">My Planet</h1>
              <p>
                Name: <span>{planet.name}</span>
              </p>
              <p>
                Climate: <span>{planet.climate}</span>
              </p>
              <p>
                Diameter: <span>{planet.diameter}</span>
              </p>
              <p>
                Gravity: <span>{planet.gravity}</span>
              </p>
              <p>
                Orbital Period: <span>{planet.orbital_period}</span>
              </p>
              <p>
                Population: <span>{planet.population}</span>
              </p>
              <p>
                Rotation Period: <span>{planet.rotation_period}</span>
              </p>
              <p>
                Surface Water: <span>{planet.surface_water}</span>
              </p>
              <p>
                Terrain: <span>{planet.terrain}</span>
              </p>
            </div>
            <div className="recently-viewed">
              <h1 className="title">Recently viewed Starships</h1>
              <hr />
              <div className="cards">
                {limitCharacters.map((character, i) => (
                  <div key={character.name}>
                    <VerticalCard
                      width="25rem"
                      image={image}
                      title={character.name}
                      item1Key="Birth Year"
                      item2Key="Gender"
                      item1={character.birth_year}
                      item2={character.gender}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ people, loader }) => ({
  character: people.character,
  characters: people.characters,
  planet: people.planet,
  isLoading: loader.isLoading
});

const mapDispatchToProps = {
  fetchCharacterById,
  fetchCharacterPlanet,
  getPeople
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
