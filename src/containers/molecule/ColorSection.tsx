/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import CustomButton from 'containers/atoms/CustomButton';
import {
  colorChange, filsterDipsKokoro,
} from 'slices/draque';
import type { colorKind } from 'slices/draque';
import { useDispatch } from 'react-redux';
import useGaTrackPage from 'hooks/AnaHooks';

// 赤、青、緑、紫
const colorList = [
  ['赤', 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'],
  ['黄', 'linear-gradient(45deg, #FFFF99 30%, #FFFF66 90%)'],
  ['青', 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'],
  ['緑', 'linear-gradient(45deg, #AED581 30%, #7CB342 90%)'],
  ['紫', 'linear-gradient(45deg, #9575CD 30%, #7E57C2 90%)'],
];
const ColorSection:React.FC = () => {
  const dispatch = useDispatch();

  const handleChangeBase = (color: colorKind) => {// eslint-disable-line
    // useGaTrackPage('/color');

    dispatch(colorChange(color));
    dispatch(filsterDipsKokoro());
  };

  return (
    <div>
      <Grid container spacing={2}>
        {/* {
        (Object.keys(color) as (keyof colorFilter)[]).map((i, x) => (
          <Grid item xs={3}>
            <CustomButton fontSize={30} defaultColor="white" themeColor={colorList[x]} handleChangeBase={() => handleChangeBase(i)} dispShow={i} />
          </Grid>
        ))
      } */}
        {
    colorList.map((i) => (
      <Grid item xs={3} key={i[0]}>
        <CustomButton fontSize={25} defaultColor={i[1]} themeColor="white" handleChangeBase={() => handleChangeBase(i[0] as colorKind)} dispShow={i[0]} />
      </Grid>
    ))
    }
      </Grid>
    </div>
  );
};

export default ColorSection;
