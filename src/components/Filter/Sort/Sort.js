import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as filterActions from '../../../redux/filter/filter-actions';
import s from './Sort.module.css';

export default function SelectDataSize() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(filterActions.sortBy(value));
    dispatch(filterActions.searchByName(''));
    dispatch(filterActions.filterByGender(''));
    dispatch(filterActions.filterbyRange([0, 100]));
  }, [dispatch, value]);

  return (
    <div className={s.container}>
      <p className={s.title}>Sort By</p>
      <select className={s.select} onChange={e => setValue(e.target.value)}>
        <option value={''}></option>
        <option value={'nameAZ'}>Name A-Z</option>
        <option value={'nameZA'}>Name Z-A</option>
        <option value={'date of birth 0-9'}>Date of birth &#8593;</option>
        <option value={'date of birth 9-0'}>Date of birth &#8595;</option>
        <option value={'cityAZ'}>city A-Z</option>
        <option value={'cityZA'}>city Z-A</option>
        <option value={'custom sort'}>custom sort</option>
      </select>
    </div>
  );
}
