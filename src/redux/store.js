import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/users-reducer';
import paginationReducer from './pagination/pagination-reducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        pagination: paginationReducer
    },
});

export default store;