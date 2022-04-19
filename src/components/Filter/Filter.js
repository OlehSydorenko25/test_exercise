import FilterByName from './FilterByName/FilterByName';
import FilterByGender from './FilterByGender/FilterByGender';
import RangeSlider from './RangeSlider/RangeSlider';
import Sort from './Sort/Sort';
import s from './Filter.module.css';

export default function Filter() {
  return (
    <div className={s.filter__container}>
      <div className={s.blc}>
        <FilterByName />
      </div>
      <div className={s.blc}>
        <RangeSlider />
      </div>
      <div className={s.blc}>
        <FilterByGender />
      </div>
      <Sort />
    </div>
  );
}
