import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as filterActions from '../../../redux/filter/filter-actions';
import s from './FilterByName.module.css';

export default function FilterByName() {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    dispatch(filterActions.searchByName(filterValue));
  }, [dispatch, filterValue]);

  const handleChage = e => {
    setFilterValue(e.target.value);
  };

  return (
    <div className={s.container}>
      <p className={s.title}>Name</p>
      <label className={s.label}>
        <input
          placeholder="Search by name"
          className={s.input}
          value={filterValue}
          onChange={handleChage}
        />
      </label>
    </div>
  );
}
