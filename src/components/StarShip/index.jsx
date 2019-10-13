import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../shared/Header/Header';
import VerticalCard from '../shared/Cards/VerticalCard';
import StarWarTitle from '../shared/StarWar/StarwarTitle';
import {
  getStarship,
  paginateStarship
} from '../../redux/actionCreator/starship';
import Pagination from '../shared/Pagination';
import Loader from '../shared/Loader';
import starship1 from '../../images/starship-1.jpg';
import './index.scss';

class StarShip extends Component {
  state = {
    totalStarships: 0,
    currentPage: 1,
    starships: [],
    starshipsPerPerPage: 10
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      starships: nextProps.starships,
      totalStarships: nextProps.count
    });
  }

  async componentDidMount() {
    const { getStarship } = this.props;
    await getStarship();
  }

  previousPage = () => {
    const { paginateStarship } = this.props;
    const { currentPage } = this.state;
    paginateStarship(currentPage - 1);
    this.setState({
      currentPage: currentPage - 1
    });
  };

  nextPage = () => {
    const { paginateStarship } = this.props;
    const { currentPage } = this.state;
    paginateStarship(currentPage + 1);
    this.setState({
      currentPage: currentPage + 1
    });
  };

  render() {
    const {
      starships,
      currentPage,
      starshipsPerPerPage,
      totalStarships
    } = this.state;

    const { isLoading } = this.props;

    const indexOfLastPage = currentPage * starshipsPerPerPage;
    const indexOfFirstPage = indexOfLastPage - (starshipsPerPerPage - 1);
    const lastPage = Math.ceil(totalStarships / starshipsPerPerPage);
    return (
      <div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <div>
            <Header page="starship" />
            <div className="starship-wrapper">
              <StarWarTitle header="Popular Starships" />
              <div className="starship">
                {starships.map(starship => (
                  <div key={starship.name}>
                    <VerticalCard
                      width="25rem"
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
            </div>
            <Pagination
              indexOfFirstPage={indexOfFirstPage}
              indexOfLastPage={indexOfLastPage}
              currentPage={currentPage}
              lastPage={lastPage}
              prevPage={this.previousPage}
              nextPage={this.nextPage}
              totalCharacters={totalStarships}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ starship, loader }) => ({
  starships: starship.starships,
  count: starship.count,
  isLoading: loader.isLoading
});

const mapDispatchToProps = {
  getStarship,
  paginateStarship
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarShip);
