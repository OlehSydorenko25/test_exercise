import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserEditor from '../../components/UserEditor/UserEditor';
import * as usersSelectors from '../../redux/users/users-selectors';
import * as usersActions from '../../redux/users/users-actions';
import s from './UserPage.module.css';

export default function UserPage(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.id;
  const allUsers = useSelector(usersSelectors.getUsers);
  const user = allUsers.find(user => user.login.uuid === userId);
  dispatch(usersActions.saveUser(user));

  return (
    <div>
      <UserEditor />
    </div>
  );
}
