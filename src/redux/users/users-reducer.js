import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as usersActions from './users-actions';

const data = createReducer([], {
    [usersActions.fetchUsersSuccess]: (state, {payload}) => [...state, ...payload],
    [usersActions.deleteUser]: (state, {payload}) => state.filter(user => user.login.uuid !== payload),
  });

export default combineReducers({
    data,
  });