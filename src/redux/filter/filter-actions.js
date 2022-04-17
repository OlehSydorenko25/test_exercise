import { createAction } from "@reduxjs/toolkit";


export const searchByName = createAction('filter/searchByName')
export const filterByGender = createAction('filter/FilterByGender')
export const filterbyRange = createAction('filter/filterbyRange')
export const sortBy = createAction('filter/sortBy')