import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import logo from '../../../images/logo.png';
// import starship1 from '../../../images/starship-6.jpg';
import starship3 from '../../../images/starship-3.jpg';
import starship4 from '../../../images/starship-4.jpg';
import starship5 from '../../../images/starship-5.jpg';

import { searchByName } from '../../../redux/actionCreator/people';
import { searchPlanetByName } from '../../../redux/actionCreator/planet';
import { searchStarshipByName } from '../../../redux/actionCreator/starship';
import './header.scss';

const Header = ({
  transition,
  searchByName,
  searchPlanetByName,
  searchStarshipByName,
  isLoading,
  page,
  name
}) => {
  const search = ({ target }) => {
    if (page === 'starship') {
      searchStarshipByName(target.value);
    } else if (page === 'planet') {
      searchPlanetByName(target.value);
    } else {
      searchByName(target.value);
    }
  };

  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt="star-wars-icon" />
      </Link>
      {!transition ? (
        <div className="header-content">
          <div className="content-icon-wrap">
            <Link to="/">
              <img
                className="content-icon-logo"
                src={logo}
                alt="star-wars-icon"
              />
            </Link>
            <div className="directory">Directory</div>
          </div>
          <div className="starwars-note">
            <p>
              Find your favorite characters, Films, Species, Starships and
              Planets
            </p>
          </div>
          <div className="search-box">
            <input
              type="search"
              placeholder="Enter a search term"
              onChange={search}
            />
            <i className="fa fa-search"></i>
            {isLoading && <Spinner animation="border" size="sm" />}
          </div>
        </div>
      ) : (
        <div className="header-content">
          {/* <div className="navigate">
            <i className="fas fa-caret-left"></i>
            <i className="fas fa-caret-right"></i>
          </div> */}
          <Carousel
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon">
                <i className="fas fa-caret-right" />
              </span>
            }
            prevIcon={
              <span aria-hidden="true" className="carousel-control-prev-icon">
                <i className="fas fa-caret-left" />
              </span>
            }
            slide={false}
            fade={true}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship4}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship5}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="caption">
            <span className="bracket">[</span>
            <span className="text">{name}</span>
            <span className="bracket">]</span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ loader }) => ({
  isLoading: loader.searchResultLoading
});

const mapDispatchToProps = {
  searchByName,
  searchPlanetByName,
  searchStarshipByName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
