import axios from 'axios';
import * as usersActions from './users-actions';

axios.defaults.baseURL = 'https://randomuser.me/api/';

export const getUsersData = (currentPage, dataSize) => async dispatch => {
  dispatch(usersActions.fetchUsersRequest());

  try {
    if (!currentPage || !dataSize) {
      return;
    }
    const responce = await axios.get(
      `?results=${dataSize}&page=${currentPage}`,
    );
    dispatch(usersActions.fetchUsersSuccess(responce.data.results));
  } catch (error) {
    console.log('error');
    dispatch(usersActions.fetchUsersError(error.message));
  }
};

export const changeName = name => async dispatch => {
  dispatch(usersActions.changeNameRequest());

  try {
    alert(`Request for name change`);
    // робимо запит для зміни імені

    // const responce = await axios.post(``)
    // dispatch(usersActions.changeNameSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changeNameError(error.message));
  }
};

export const changeEmail = email => async dispatch => {
  dispatch(usersActions.changeEmailRequest());

  try {
    alert(`Request for email change`);
    // робимо запит для зміни пошти

    // const responce = await axios.post(``)
    // dispatch(usersActions.changeEmailSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changeEmailError(error.message));
  }
};

export const changePhoneNumber = number => async dispatch => {
  dispatch(usersActions.changePhoneNumberRequest());

  try {
    alert(`Request for phone namber change`);
    // робимо запит для зміни мобільного

    // const responce = await axios.post(``)
    // dispatch(usersActions.changePhoneNumberSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changePhoneNumberError(error.message));
  }
};

export const changeLocation = value => async dispatch => {
  dispatch(usersActions.changeLocationRequest());

  try {
    alert(`Request for location change`);
    // робимо запит для зміни місця проживання

    // const responce = await axios.post(``)
    // dispatch(usersActions.changeLocationSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changeLocationError(error.message));
  }
};

export const changeAddress = address => async dispatch => {
  dispatch(usersActions.changeAddressRequest());

  try {
    alert(`Request for address change`);
    // робимо запит для зміни місця адреси

    // const responce = await axios.post(``)
    // dispatch(usersActions.changeAddressSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changeAddressError(error.message));
  }
};

export const changeDateBirth = dateBirth => async dispatch => {
  dispatch(usersActions.changeDateBirthRequest());

  try {
    alert(`Request for birthDate change`);
    // робимо запит для зміни дня народження

    // const responce = await axios.post(``)
    // dispatch(usersActions.changeDateBirthSuccess(responce.data.results))
  } catch (error) {
    console.log('error');
    dispatch(usersActions.changeDateBirthError(error.message));
  }
};
