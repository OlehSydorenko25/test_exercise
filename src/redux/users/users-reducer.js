import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as usersActions from './users-actions';

const data = createReducer([], {
  [usersActions.fetchUsersSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [usersActions.deleteUser]: (state, { payload }) =>
    state.filter(user => user.login.uuid !== payload),
  [usersActions.changeState]: (_, { payload }) => payload,
});

const oneUser = createReducer([], {
  [usersActions.saveUser]: (_, { payload }) => payload,
});

export default combineReducers({
  data,
  oneUser,
});
