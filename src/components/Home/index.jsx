import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import HorizontalCard from '../shared/Cards/HorizontalCard';
import Card from 'react-bootstrap/Card';
import StarWarTitle from '../shared/StarWar/StarwarTitle';
import { getStarship } from '../../redux/actionCreator/starship';
import { getPeople } from '../../redux/actionCreator/people';
import { getPlanets } from '../../redux/actionCreator/planet';
import starship1 from '../../images/starship-1.jpg';
import planet1 from '../../images/planet-1.jpg';
import Loader from '../shared/Loader';
import './index.scss';

class Home extends Component {
  state = {
    starships: [],
    characters: [],
    planets: []
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      starships: nextProps.starships.slice(0, 6),
      planets: nextProps.planetLists.slice(0, 3),
      characters: nextProps.characters.slice(0, 4)
    });
  }

  async componentDidMount() {
    const { getStarship, getPeople, getPlanets } = this.props;
    await getStarship();
    await getPeople();
    await getPlanets();
  }

  render() {
    const { starships, characters, planets } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="home">
        <Loader isLoading={isLoading}>
          <div>
            <Header page="starship" />
            <div className="home-content-wrap">
              <StarWarTitle header="Popular Starships" />
              <div className="starship">
                {starships.map(starship => (
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
              <div className="vm-wrap">
                <Link to="/starships" className="view-more">
                  View More
                </Link>
              </div>
              <StarWarTitle header="Popular Planets" />
              <div className="planet">
                {planets.map(planet => (
                  <div key={planet.name}>
                    <Card style={{ width: '25rem' }}>
                      <Card.Img variant="top" src={planet1} />
                      <Card.Body>
                        <Card.Title>{planet.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
              <StarWarTitle header="Popular Characters" />
              <div className="characters">
                {characters.map((character, i) => (
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
              <div className="vm-wrap">
                <Link to="/characters" className="view-more">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </Loader>
      </div>
    );
  }
}

const mapStateToProps = ({ people, starship, planets, loader }) => ({
  starships: starship.starships,
  characters: people.characters,
  planetLists: planets.planets,
  isLoading: loader.isLoading
});

const mapDispatchToProps = {
  getStarship,
  getPeople,
  getPlanets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
