import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as filterActions from '../../../redux/filter/filter-actions';
import s from './FilterByGender.module.css';

export default function FilterByName() {
  const dispatch = useDispatch();
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    dispatch(filterActions.filterByGender(filterGender));
  }, [dispatch, filterGender]);

  const handleChandeGender = e => {
    const value = e.target.value;
    if (filterGender === value) {
      setFilterGender('');
      return;
    }
    setFilterGender(value);
  };

  return (
    <div>
      <p className={s.title}>Gender</p>
      <label>
        <input
          className={filterGender !== 'Male' ? s.button : s.activeButton}
          value={'Male'}
          type="button"
          onClick={handleChandeGender}
        />

        <input
          className={filterGender !== 'Female' ? s.button : s.activeButton}
          value={'Female'}
          type="button"
          onClick={handleChandeGender}
        />
      </label>
    </div>
  );
}
