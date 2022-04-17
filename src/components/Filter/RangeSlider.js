import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as filterActions from '../../redux/filter/filter-actions'
import { useDispatch } from 'react-redux';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(filterActions.filterbyRange(newValue))
  };
  // console.log(value);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div>
        <span>{value[0]}</span>-
        <span>{value[1]}</span>
      </div>
    </Box>
  );
}