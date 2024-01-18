import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    e.preventDefault();
    const currentFilter = e.currentTarget.value;
    dispatch(changeFilter(currentFilter));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter.value}
        onChange={handleFilterChange}
      ></Input>
    </Label>
  );
};

export default Filter;
