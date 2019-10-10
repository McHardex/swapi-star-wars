import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import StarWarTitle from '../shared/StarWar/StarwarTitle';
import { getPlanets, paginatePlanet } from '../../redux/actionCreator/planet';
import Pagination from '../shared/Pagination';
import planet1 from '../../images/planet-1.jpg';
import './index.scss';

class Planets extends Component {
  state = {
    totalPlanets: 0,
    currentPage: 1,
    planets: [],
    planetsPerPerPage: 10
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      planets: nextProps.planets,
      totalPlanets: nextProps.count
    });
  }

  async componentDidMount() {
    const { getPlanets } = this.props;
    await getPlanets();
  }

  previousPage = () => {
    const { paginatePlanet } = this.props;
    const { currentPage } = this.state;
    paginatePlanet(currentPage - 1);
    this.setState({
      currentPage: currentPage - 1
    });
  };

  nextPage = () => {
    const { paginatePlanet } = this.props;
    const { currentPage } = this.state;
    paginatePlanet(currentPage + 1);
    this.setState({
      currentPage: currentPage + 1
    });
  };

  render() {
    const {
      planets,
      currentPage,
      planetsPerPerPage,
      totalPlanets
    } = this.state;

    const indexOfLastPage = currentPage * planetsPerPerPage;
    const indexOfFirstPage = indexOfLastPage - (planetsPerPerPage - 1);
    const lastPage = Math.ceil(totalPlanets / planetsPerPerPage);
    return (
      <div>
        <Header page="planet" />
        <div className="planet-wrapper">
          <StarWarTitle header="Popular Planets" />
          <div className="planets">
            {planets.map(planet => (
              <div key={planet.name}>
                <VerticalCard
                  width="30rem"
                  image={planet1}
                  title={planet.name}
                  item1Key="Population"
                  item2Key="Temperature"
                  item1={planet.population}
                  item2={planet.climate}
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
          totalCharacters={totalPlanets}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ planets }) => ({
  planets: planets.planets,
  count: planets.count
});

const mapDispatchToProps = {
  getPlanets,
  paginatePlanet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets);
