import axios from "axios";
import * as usersActions from './users-actions'

axios.defaults.baseURL = 'https://randomuser.me/api/';

export const getUsersData = (currentPage, dataSize) => async dispatch => {
    dispatch(usersActions.fetchUsersRequest());

    try {
        const responce = await axios.get(`?results=${dataSize}&page=${currentPage}`)
        dispatch(usersActions.fetchUsersSuccess(responce.data.results))
    } catch (error) {
        console.log('error');
        dispatch(usersActions.fetchUsersError(error.message));
    }

}