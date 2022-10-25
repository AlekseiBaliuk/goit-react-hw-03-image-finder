import React, { Component } from 'react';
import { SearchbarHeader } from './Searchbar.styled';
import PropTypes from 'prop-types';
import '../../styles.css';

class Searchbar extends Component {
  //   static propTypes = {
  //     onSubmit: PropTypes.func.isRequired,
  //   };

  render() {
    return (
      <SearchbarHeader>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
