import { Routes, Route} from 'react-router-dom';
import UsersPage from './views/UsersPage/UsersPage';
import UserPage from './views/UserPage/UserPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as userOperations from './redux/users/users-operations';
import * as pagSelectors from './redux/pagination/pagination-selectors';

import './App.css';

function App({fetchUsers}) {
  const dispatch = useDispatch();
  const currentPage = useSelector(pagSelectors.getCurrentPage)
  const dataSize = useSelector(pagSelectors.getdataSize)

  useEffect(() => {
      dispatch(userOperations.getUsersData(currentPage, dataSize))
  }, [dispatch, currentPage, dataSize])


  
  return (
    <Routes>
      <Route path='/' element={<UsersPage />}/>
      <Route path='/user/:id' element={<UserPage />}/>
    </Routes>
  );
}

export default App;
