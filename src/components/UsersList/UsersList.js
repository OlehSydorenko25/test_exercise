import { useSelector } from "react-redux";
import * as usersSelectors from '../../redux/users/users-selectors';
import Pagination from "../pagination/Pagination";
import SelectDataSize from "../SelectDataSize/SelectDataSize";


function UsersList() {
  const users = useSelector(usersSelectors.getUsers)

  console.log('qwe', users);
  return (
    <>
      <ul>
        {users.map(user => <li key={user.login.uuid}>
          <p>{user.email}</p>
          <span>{user.name.first}</span>
          <span> {user.name.last}</span>
        </li>)}
      </ul>
      <Pagination />
      <div>
        <SelectDataSize />
      </div>
    </>
  );
}


export default UsersList;
