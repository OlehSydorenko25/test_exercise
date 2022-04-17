import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as paginationActions from './pagination-actions';

const currentPage = createReducer(1, {
    [paginationActions.currentPageSuccess]: (_, {payload}) => payload,
  });

const perPage = createReducer(10, {
    [paginationActions.perPageSuccess]: (_, {payload}) => payload,
});

const dataSize = createReducer("", {
    [paginationActions.dataSizeSuccess]: (_, {payload}) => payload,
});

export default combineReducers({
    currentPage,
    perPage,
    dataSize
  });