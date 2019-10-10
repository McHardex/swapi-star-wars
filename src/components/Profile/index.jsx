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
          <h3>
            Height: <span>{character.height}</span>
          </h3>
          <h3>
            Mass: <span>{character.mass}</span>
          </h3>
          <h3>
            Hair Color: <span>{character.hair_color}</span>
          </h3>
          <h3>
            Skin Color: <span>{character.skin_color}</span>
          </h3>
          <h3>
            Eye Color: <span>{character.eye_color}</span>
          </h3>
          <h3>
            Gender: <span>{character.gender}</span>
          </h3>
        </div>
        <div className="profile-content">
          <h1 className="name">My Planet</h1>
          <h3>
            Name: <span>{planet.name}</span>
          </h3>
          <h3>
            Climate: <span>{planet.climate}</span>
          </h3>
          <h3>
            Diameter: <span>{planet.diameter}</span>
          </h3>
          <h3>
            Gravity: <span>{planet.gravity}</span>
          </h3>
          <h3>
            Orbital Period: <span>{planet.orbital_period}</span>
          </h3>
          <h3>
            Population: <span>{planet.population}</span>
          </h3>
          <h3>
            Rotation Period: <span>{planet.rotation_period}</span>
          </h3>
          <h3>
            Surface Water: <span>{planet.surface_water}</span>
          </h3>
          <h3>
            Terrain: <span>{planet.terrain}</span>
          </h3>
        </div>
        <div className="recently-viewed">
          <h1 className="title">Recently viewed Starships</h1>
          <hr />
          <div className="cards">
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
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
