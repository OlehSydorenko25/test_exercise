
import UsersList from '../../components/UsersList/UsersList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as userOperations from '../../redux/users/users-operations';
import * as pagSelectors from '../../redux/pagination/pagination-selectors';
import Filter from '../../components/Filter/Filter';
import './UsersPage.css'

function UsersPage() {
    const dispatch = useDispatch();
    const currentPage = useSelector(pagSelectors.getCurrentPage)
    const dataSize = useSelector(pagSelectors.getdataSize)

    useEffect(() => {
        dispatch(userOperations.getUsersData(currentPage, dataSize))
    }, [dispatch, currentPage, dataSize])

  return (
    <>
      <h1>Users Page</h1>
      <div className='container'>
        <div className='filter__container'>
          <Filter />
        </div>
        <div>
          <UsersList />
        </div>
      </div>
    </>
  );
}


export default UsersPage;
