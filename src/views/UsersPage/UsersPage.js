import UsersList from '../../components/UsersList/UsersList';
import Filter from '../../components/Filter/Filter';
import s from './UsersPage.module.css';

export default function UsersPage() {
  return (
    <>
      <div className={s.container}>
        <div>
          <h2 className={s.title}>Filter</h2>
          <Filter />
        </div>
        <div className={s.usserListContainer}>
          <h2 className={s.title}>List of users</h2>
          <UsersList />
        </div>
      </div>
    </>
  );
}
