import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as paginationActions from './pagination-actions';

const currentPage = createReducer(1, {
  [paginationActions.currentPageSuccess]: (_, { payload }) => payload,
});

const totalNumberUsers = createReducer(500, {
  [paginationActions.perPageSuccess]: (_, { payload }) => payload,
});

const dataSize = createReducer('50', {
  [paginationActions.dataSizeSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  currentPage,
  totalNumberUsers,
  dataSize,
});
