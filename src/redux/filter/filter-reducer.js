import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as filterActions from './filter-actions';

const search = createReducer('', {
  [filterActions.searchByName]: (_, { payload }) => payload,
});

const gender = createReducer('', {
  [filterActions.filterByGender]: (_, { payload }) => payload,
});

const rangeSlider = createReducer([0, 100], {
  [filterActions.filterbyRange]: (_, { payload }) => payload,
});

const sortBy = createReducer('', {
  [filterActions.sortBy]: (_, { payload }) => payload,
});

export default combineReducers({
  search,
  gender,
  rangeSlider,
  sortBy,
});
