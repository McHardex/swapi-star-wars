import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header/Header';
import HorizontalCard from '../shared/Cards/HorizontalCard';
import { getPeople, paginate } from '../../redux/actionCreator/index';
import Pagination from '../shared/Pagination';
import './home.scss';

class Home extends Component {
  state = {
    totalCharacters: 0,
    currentPage: 1,
    characters: [],
    charactersPerPage: 10
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      characters: nextProps.characters,
      totalCharacters: nextProps.count
    };
  }

  async componentDidMount() {
    const { getPeople } = this.props;
    await getPeople();
  }

  previousPage = () => {
    const { paginate } = this.props;
    const { currentPage } = this.state;
    paginate(currentPage - 1);
    this.setState({
      currentPage: currentPage - 1
    });
  };

  nextPage = () => {
    const { paginate } = this.props;
    const { currentPage } = this.state;
    paginate(currentPage + 1);
    this.setState({
      currentPage: currentPage + 1
    });
  };

  render() {
    const {
      characters,
      currentPage,
      charactersPerPage,
      totalCharacters
    } = this.state;

    const indexOfLastPage = currentPage * charactersPerPage;
    const indexOfFirstPage = indexOfLastPage - (charactersPerPage - 1);
    const lastPage = Math.ceil(totalCharacters / charactersPerPage);

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
        <Pagination
          indexOfFirstPage={indexOfFirstPage}
          indexOfLastPage={indexOfLastPage}
          currentPage={currentPage}
          lastPage={lastPage}
          prevPage={this.previousPage}
          nextPage={this.nextPage}
          totalCharacters={totalCharacters}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ people }) => ({
  characters: people.characters,
  count: people.count
});

const mapDispatchToProps = {
  getPeople,
  paginate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
