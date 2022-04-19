import { createAction } from "@reduxjs/toolkit";


export const fetchUsersRequest = createAction('users/fetchRequest')
export const fetchUsersSuccess = createAction('users/fetchSuccess')
export const fetchUsersError = createAction('users/fetchError')

export const changeNameRequest = createAction('users/changeNameRequest')
export const changeNameSuccess = createAction('users/changeNameSuccess')
export const changeNameError = createAction('users/changeNameError')

export const changeEmailRequest = createAction('users/changeEmailRequest')
export const changeEmailSuccess = createAction('users/changeEmailSuccess')
export const changeEmailError = createAction('users/changeEmailError')

export const changePhoneNumberRequest = createAction('users/changePhoneNumberRequest')
export const changePhoneNumberSuccess = createAction('users/changePhoneNumberSuccess')
export const changePhoneNumberError = createAction('users/changePhoneNumberError')

export const changeLocationRequest = createAction('users/changeLocationRequest')
export const changeLocationSuccess = createAction('users/changeLocationSuccess')
export const changeLocationError = createAction('users/changeLocationError')

export const changeAddressRequest = createAction('users/changeAddressRequest')
export const changeAddressSuccess = createAction('users/changeAddressSuccess')
export const changeAddressError = createAction('users/changeAddressError')

export const changeDateBirthRequest = createAction('users/changeDateBirthRequest')
export const changeDateBirthSuccess = createAction('users/changeDateBirthSuccess')
export const changeDateBirthError = createAction('users/changeDateBirthError')

export const deleteUser = createAction('users/deleteUser')