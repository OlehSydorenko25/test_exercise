import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as filterActions from '../../../redux/filter/filter-actions';
import { useDispatch } from 'react-redux';
import s from './RangeSlider.module.css';

export default function RangeSlider() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(filterActions.filterbyRange(newValue));
  };

  return (
    <Box sx={{ width: 307 }}>
      <p className={s.title}>Age</p>
      <div className={s.slider}>
        <Slider value={value} onChange={handleChange} />
      </div>
      <div className={s.text}>
        <span>{value[0]} </span>-<span> {value[1]}</span>
      </div>
    </Box>
  );
}
