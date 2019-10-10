import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacterById,
  fetchCharacterPlanet
} from '../../redux/actionCreator/people';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import './index.scss';

const Profile = ({
  match,
  fetchCharacterById,
  fetchCharacterPlanet,
  character,
  planet
}) => {
  useEffect(() => {
    const {
      params: { id }
    } = match;
    fetchCharacterById(id);
    fetchCharacterPlanet(character.homeworld);
  }, [fetchCharacterById, fetchCharacterPlanet, match, character.homeworld]);

  return (
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
            <VerticalCard width="25rem" />
            <VerticalCard width="25rem" />
            <VerticalCard width="25rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ people }) => ({
  character: people.character,
  planet: people.planet
});

const mapDispatchToProps = {
  fetchCharacterById,
  fetchCharacterPlanet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
