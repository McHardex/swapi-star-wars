import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import HorizontalCard from '../shared/Cards/HorizontalCard';
import StarWarTitle from '../shared/StarWar/StarwarTitle';

import starship1 from '../../images/starship-1.jpg';
import { getStarship } from '../../redux/actionCreator/starship';
import { getPeople } from '../../redux/actionCreator/people';
import './index.scss';

class Home extends Component {
  state = {
    starships: [],
    characters: []
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      starships: nextProps.starships,
      characters: nextProps.characters
    });
  }

  async componentDidMount() {
    const { getStarship, getPeople } = this.props;
    await getStarship();
    getPeople();
  }

  render() {
    const { starships, characters } = this.state;
    const limitStarships = starships.slice(0, 6);
    const limitCharacters = characters.slice(0, 4);

    return (
      <div className="home">
        <Header page="starship" />
        <div className="home-content-wrap">
          <StarWarTitle header="Popular Starships" />
          <div className="starship">
            {limitStarships.map(starship => (
              <div key={starship.name}>
                <VerticalCard
                  width="30rem"
                  image={starship1}
                  title={starship.name}
                  item1Key="Model"
                  item2Key="Cargo capacity"
                  item1={starship.model}
                  item2={starship.cargo_capacity}
                />
              </div>
            ))}
          </div>
          <StarWarTitle header="Popular Planets" />
          <StarWarTitle header="Popular Characters" />
          <div className="characters">
            {limitCharacters.map((character, i) => (
              <div key={character.name}>
                <HorizontalCard
                  width="40rem"
                  title={character.name}
                  birthYear={character.birth_year}
                  gender={character.gender}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ people, starship }) => ({
  starships: starship.starships,
  characters: people.characters
});

const mapDispatchToProps = {
  getStarship,
  getPeople
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
