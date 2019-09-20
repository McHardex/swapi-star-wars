import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../images/logo.png';
import starship1 from '../../images/starship-1.jpg';
import starship2 from '../../images/starship-2.jpg';
import starship3 from '../../images/starship-3.jpg';
import starship4 from '../../images/starship-4.jpg';
import starship5 from '../../images/starship-5.jpg';
import starship6 from '../../images/starship-6.jpg';
import './header.scss';

const Header = ({ transition }) => {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="star-wars-icon" />
      {!transition ? (
        <div className="header-content">
          <div className="content-icon-wrap">
            <img
              className="content-icon-logo"
              src={logo}
              alt="star-wars-icon"
            />
            <div className="directory">Directory</div>
          </div>
          <div className="starwars-note">
            <p>
              Find your favorite characters, Films, Species, Starships and
              Planets
            </p>
          </div>
          <div className="search-box">
            <input type="search" placeholder="Enter a search term" />
            <i className="fa fa-search"></i>
          </div>
        </div>
      ) : (
        <div className="header-content">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship2}
                alt="Third slide"
              />
            </Carousel.Item>
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
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={starship6}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="caption">
            <span className="bracket">[</span>
            <span className="text">colian jade</span>
            <span className="bracket">]</span>
          </div>
          <div className="navigate">
            <i className="fas fa-caret-left"></i>
            <i className="fas fa-caret-right"></i>
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  transition: PropTypes.bool.isRequired
};

export default Header;
