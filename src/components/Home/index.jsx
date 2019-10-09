import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header/Header';
import HorizontalCard from '../shared/Cards/HorizontalCard';
import { getPeople } from '../../redux/actionCreator/index';
import './home.scss';

class Home extends Component {
  state = {
    count: 0,
    characters: []
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      characters: nextProps.characters,
      count: nextProps.count
    };
  }

  async componentDidMount() {
    const { getPeople } = this.props;
    await getPeople();
  }

  render() {
    const { characters, count } = this.state;
    console.log(characters, count, 'cha');
    return (
      <div>
        <Header />
        <div className="char-wrapper">
          <div className="character-title">
            <h3>Starwars Characters</h3>
            <hr className="title-line" />
          </div>
          <div className="characters">
            {characters.map(character => (
              <div key={character.name}>
                <HorizontalCard
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

const mapStateToProps = ({ people }) => ({
  characters: people.characters,
  count: people.count
});

const mapDispatchToProps = {
  getPeople
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
