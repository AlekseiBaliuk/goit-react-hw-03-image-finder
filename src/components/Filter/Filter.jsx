import React from 'react';
import PropTypes from 'prop-types';
import { FilterTitle, FilterContainer, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <label>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </label>
  </FilterContainer>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
