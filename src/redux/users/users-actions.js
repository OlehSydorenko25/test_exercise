import { createAction } from "@reduxjs/toolkit";


export const fetchUsersRequest = createAction('users/fetchRequest')
export const fetchUsersSuccess = createAction('users/fetchSuccess')
export const fetchUsersError = createAction('users/fetchError')

