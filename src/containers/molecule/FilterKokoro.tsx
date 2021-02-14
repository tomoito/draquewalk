/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box, Button, Grid, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobCalc, JobFavariteTeisu } from 'constants/Teisu';
import type{ jobFilter } from 'slices/draque';
import {
  kokoroFitFilter, resetDispKokoro, addKokoro, optionKind, selectDamageUp, statusChange, kokoro, selectColor, selectBaseStatus, selectDipsKokoro, selectAllKokoro, filsterDipsKokoro, selectFilterKokoro, jobChange, selectJob,
} from '../../slices/draque';
import DataSolo from '../../Testdata/DataSolo.json';
import classes from './FilterKokoro.module.css';

const FilterKokoro:React.FC = () => {
  const x = 'test';
  const dispatch = useDispatch();
  const selectFilter = useSelector(selectDipsKokoro);
  const Job = useSelector(selectJob);

  const funcJobChange = (job:jobFilter) => {
    dispatch(resetDispKokoro());
    dispatch(jobChange(job));

    // const hoge = id;
    // const addK:selectKokoro = {
    //   id: hoge,
    //   kokoro: kokoroModal,
    // };
    // dispatch(addKokoro(addK));
    // dispatch(statusChange());
  };

  return (
    <div>
      <Box>
        <Button onClick={() => funcJobChange('バトルマスター')} variant="outlined" color="primary">バトマス</Button>
        <Button onClick={() => funcJobChange('レンジャー')} variant="outlined" color="primary">レンジャー</Button>
        <Button onClick={() => funcJobChange('賢者')} variant="outlined" color="primary">賢者</Button>
        <Button onClick={() => funcJobChange('バトルマスター')} variant="outlined" color="primary">パラディン</Button>
      </Box>

      <Grid container>
        {
          (Object.keys(selectFilter) as (keyof kokoroFitFilter)[]).map((i) => (
            <Grid item xs={3}>
              <Typography>{JobFavariteTeisu[Job][i]}</Typography>
              <img className={classes.btncirclestitch} alt={selectFilter[i].name} src={`${process.env.PUBLIC_URL}/pic/${selectFilter[i].imgpath}`} />
              <Typography>
                { i }
                :
                {
                  selectFilter[i].name === 'blank' ? '無し' : (selectFilter[i].name)
                }
              </Typography>

            </Grid>
          ))
        }
      </Grid>

    </div>
  );
};

export default FilterKokoro;
