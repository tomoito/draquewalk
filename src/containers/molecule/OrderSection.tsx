/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useDispatch } from 'react-redux';
import type { orderFilter, orderDestAsc } from 'slices/draque';
import { orderChange, orderChange2, orderResult } from 'slices/draque';
import { Grid } from '@material-ui/core';

const options = ['HP', 'MP', '攻撃力', '守備力', '攻撃魔法', '回復魔力'];
const options2 = ['昇順', '降順'];

const OrderSection:React.FC = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [value2, setValue2] = React.useState<string>(options2[1]);
  const dispatch = useDispatch();

  // const handleChange = (e:orderFilter) => {// eslint-disable-line
  //   // alert(e);
  //   dispatch(orderChange(e));
  // };
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as orderFilter);
    dispatch(orderChange(event.target.value as orderFilter));
    dispatch(orderResult());
  };
  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue2(event.target.value as orderDestAsc);
    dispatch(orderChange2(event.target.value as orderDestAsc));
    dispatch(orderResult());
  };

  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />

      <Grid container spacing={4}>
        <Grid item>
          <InputLabel id="demo-simple-select-label">ステータス</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            onChange={handleChange}
          >

            {
          options.map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))
        }

          </Select>

        </Grid>
        <Grid item>

          <InputLabel id="demo-simple-select-label2">順番</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select2"
            value={value2}
            onChange={handleChange2}
          >

            {
          options2.map((i) => (
            <MenuItem value={i}>{i}</MenuItem>
          ))
        }

          </Select>

        </Grid>
      </Grid>

    </div>
  );
};

export default OrderSection;
