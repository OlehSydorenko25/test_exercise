import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/users-reducer';
import paginationReducer from './pagination/pagination-reducer';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
    reducer: {
        users: usersReducer,
        pagination: paginationReducer,
        filter: filterReducer,
    },
});

export default store;