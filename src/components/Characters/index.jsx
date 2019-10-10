import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../shared/Header/Header';
import HorizontalCard from '../shared/Cards/HorizontalCard';
import StarWarTitle from '../shared/StarWar/StarwarTitle';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getPeople, paginate } from '../../redux/actionCreator/people';
import Pagination from '../shared/Pagination';
import './index.scss';

class Characters extends Component {
  state = {
    totalCharacters: 0,
    currentPage: 1,
    characters: [],
    charactersPerPage: 10,
    filterTitle: 'filter'
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      characters: nextProps.characters,
      totalCharacters: nextProps.count
    });
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

  filterItems = eventKey => {
    const { characters } = this.props;
    const result = characters.filter(
      character => character.gender === eventKey
    );
    this.setState({
      characters: result,
      filterTitle: eventKey
    });
  };

  render() {
    const {
      characters,
      currentPage,
      charactersPerPage,
      totalCharacters,
      filterTitle
    } = this.state;

    const indexOfLastPage = currentPage * charactersPerPage;
    const indexOfFirstPage = indexOfLastPage - (charactersPerPage - 1);
    const lastPage = Math.ceil(totalCharacters / charactersPerPage);
    return (
      <div>
        <Header />
        <div className="char-wrapper">
          <StarWarTitle header="Starwar Characters" />

          {/* fillter and grid */}
          <div className="filter">
            <h3>FILTER</h3>
            <DropdownButton
              id="dropdown-item-button"
              title={filterTitle}
              onSelect={this.filterItems}
            >
              <Dropdown.Item as="button" eventKey="male">
                Male
              </Dropdown.Item>
              <Dropdown.Item as="button" eventKey="female">
                Female
              </Dropdown.Item>
              <Dropdown.Item as="button" eventKey="robot">
                Robot
              </Dropdown.Item>
            </DropdownButton>
          </div>
          {characters.length === 0 && <p>No result found</p>}
          <div className="characters">
            {characters.map((character, i) => (
              <div key={character.name}>
                <Link to={`profile/${i + 1}`}>
                  <HorizontalCard
                    width="35rem"
                    title={character.name}
                    birthYear={character.birth_year}
                    gender={character.gender}
                  />
                </Link>
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
)(Characters);
