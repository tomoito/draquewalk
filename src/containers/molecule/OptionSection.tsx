import React from 'react';

import {
  Grid,
} from '@material-ui/core';

import CustomButton from 'containers/atoms/CustomButton';
import {
  optionChange, selectDamageUp, filsterDipsKokoro, skillChange,
} from 'slices/draque';
import type { optionKind, optionFilter } from 'slices/draque';
import { useDispatch, useSelector } from 'react-redux';

const OptionSection:React.FC = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectDamageUp);

  const handleChangeBase = (color: optionKind) => {// eslint-disable-line
    dispatch(optionChange(color));
    dispatch(filsterDipsKokoro());
  };

  const handleChangeSkill = () => {// eslint-disable-line
    dispatch(skillChange());
    dispatch(filsterDipsKokoro());
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomButton fontSize={13} defaultColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" themeColor="white" handleChangeBase={handleChangeSkill} dispShow="スキル持ち" />
        </Grid>
        {
        (Object.keys(color) as (keyof optionFilter)[]).map((i) => (
          <Grid item xs={4} key={i}>
            <CustomButton fontSize={13} defaultColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" themeColor="white" handleChangeBase={() => handleChangeBase(i)} dispShow={i} />
          </Grid>
        ))
      }

      </Grid>
    </div>
  );
};

export default OptionSection;
