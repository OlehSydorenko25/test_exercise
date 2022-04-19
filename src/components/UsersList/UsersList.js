import { useDispatch, useSelector } from 'react-redux';
import * as usersSelectors from '../../redux/users/users-selectors';
import * as usersActions from '../../redux/users/users-actions';
import * as filterSelectors from '../../redux/filter/filter-selectors';
import Pagination from '../pagination/Pagination';
import SelectDataSize from '../SelectDataSize/SelectDataSize';
import UserItem from '../UserItem/UserItem';
import s from './UsersList.module.css';
import { useState } from 'react';

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelectors.getUsers);
  const filterName = useSelector(filterSelectors.search);
  const filterGender = useSelector(filterSelectors.genderMale);
  const rangeSlider = useSelector(filterSelectors.rangeSlider);
  const sortBy = useSelector(filterSelectors.getSort);

  let visibleUsers = [...users];

  visibleUsers = users.filter(user =>
    user.name.first.toLowerCase().includes(filterName.toLowerCase()),
  );

  if (filterGender !== '') {
    visibleUsers = visibleUsers.filter(user => {
      if (filterGender === '') {
        return user;
      }
      return user.gender.toLowerCase() === filterGender.toLowerCase();
    });
  }

  if (rangeSlider[0] !== 0 || rangeSlider[1] !== 100) {
    visibleUsers = visibleUsers.filter(
      user => user.dob.age >= rangeSlider[0] && user.dob.age <= rangeSlider[1],
    );
  }

  const [currentIndex, setCurrentindex] = useState(null);

  if (sortBy !== '') {
    switch (sortBy) {
      case 'date of birth 0-9':
        visibleUsers.sort((a, b) => {
          const dateA = new Date(a.dob.date);
          const dateB = new Date(b.dob.date);
          return dateA - dateB;
        });
        break;

      case 'date of birth 9-0':
        visibleUsers.sort((a, b) => {
          const dateA = new Date(a.dob.date);
          const dateB = new Date(b.dob.date);
          return dateB - dateA;
        });
        break;

      case 'nameAZ':
        // eslint-disable-next-line array-callback-return
        visibleUsers.sort((a, b) => {
          const nameA = a.name.first.toLowerCase();
          const nameB = b.name.first.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
        });
        // dispatch(usersActions.changeState(arr))
        break;

      case 'nameZA':
        // eslint-disable-next-line array-callback-return
        visibleUsers.sort((a, b) => {
          const nameA = a.name.first.toLowerCase();
          const nameB = b.name.first.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
        });
        visibleUsers.reverse();
        break;

      case 'cityAZ':
        // eslint-disable-next-line array-callback-return
        visibleUsers.sort((a, b) => {
          const nameA = a.location.city.toLowerCase();
          const nameB = b.location.city.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
        });
        break;

      case 'cityZA':
        // eslint-disable-next-line array-callback-return
        visibleUsers.sort((a, b) => {
          const nameA = a.location.city.toLowerCase();
          const nameB = b.location.city.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
        });
        visibleUsers.reverse();
        break;

      default:
        break;
    }
  }

  function dragStartHandler(e, user) {
    const index = users.indexOf(user);
    setCurrentindex(index);
  }

  function dragEndHandler(e, user) {}

  function dragOverHandler(e, user) {
    e.preventDefault();
  }

  function dropHandler(e, user) {
    e.preventDefault();
    const arr = [...users];
    const index = users.indexOf(user);

    // eslint-disable-next-line no-extend-native
    Array.prototype.move = function (from, to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
      return this;
    };
    arr.move(currentIndex, index);
    dispatch(usersActions.changeState(arr));
  }

  return (
    <>
      <ul>
        {visibleUsers.map(user => (
          <li
            onDragStart={e => dragStartHandler(e, user)}
            onDragLeave={e => dragEndHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={e => dragOverHandler(e)}
            onDrop={e => dropHandler(e, user)}
            draggable={sortBy === 'custom sort' ? true : false}
            key={user.login.uuid}
            className={sortBy === 'custom sort' ? s.activeItem : s.item}
          >
            <UserItem
              img={user.picture.large}
              id={user.login.uuid}
              date={user.dob.date}
              city={user.location.city}
              streetName={user.location.street.name}
              streetNumber={user.location.street.number}
              email={user.email}
              firstName={user.name.first}
              lastName={user.name.last}
            />
          </li>
        ))}
      </ul>
      <div className={s.bottomBlc}>
        <Pagination />
        <SelectDataSize />
      </div>
    </>
  );
}

export default UsersList;
