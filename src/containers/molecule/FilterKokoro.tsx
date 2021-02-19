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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
  makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import classes from './FilterKokoro.module.css';
import DataSolo from '../../Testdata/DataSolo.json';
import {
  kokoroFitFilter, resetDispKokoro, addKokoro, optionKind, selectDamageUp, statusChange, kokoro, selectColor, selectBaseStatus, selectDipsKokoro, selectAllKokoro, filsterDipsKokoro, selectFilterKokoro, jobChange, selectJob,
} from '../../slices/draque';

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const FilterKokoro:React.FC = () => {
  const x = 'test';
  const dispatch = useDispatch();
  const selectFilter = useSelector(selectDipsKokoro);
  const Job = useSelector(selectJob);

  const classesHook = useStyles();
  const theme = useTheme();

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
    <div className={classesHook.content}>
      <div className={classesHook.toolbar}>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">職業を選択してください。</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="バトマス">
              <FormControlLabel onClick={() => funcJobChange('バトルマスター')} value="バトマス" control={<Radio color="primary" />} label="バトマス" />
              <FormControlLabel onClick={() => funcJobChange('レンジャー')} value="レンジャー" control={<Radio color="primary" />} label="レンジャー" />
              <FormControlLabel onClick={() => funcJobChange('賢者')} value="賢者" control={<Radio color="primary" />} label="賢者" />
              <FormControlLabel onClick={() => funcJobChange('パラディン')} value="パラディン" control={<Radio color="primary" />} label="パラディン" />
              <FormControlLabel onClick={() => funcJobChange('魔法戦士')} value="魔法戦士" control={<Radio color="primary" />} label="魔法戦士" />
              <FormControlLabel onClick={() => funcJobChange('スーパースター')} value="スーパースター" control={<Radio color="primary" />} label="スーパースター" />
              <FormControlLabel onClick={() => funcJobChange('海賊')} value="海賊" control={<Radio color="primary" />} label="海賊" />

            </RadioGroup>
          </FormControl>
          {/* <Button onClick={() => funcJobChange('バトルマスター')} variant="outlined" color="primary">バトマス</Button>
        <Button onClick={() => funcJobChange('レンジャー')} variant="outlined" color="primary">レンジャー</Button>
        <Button onClick={() => funcJobChange('賢者')} variant="outlined" color="primary">賢者</Button>
        <Button onClick={() => funcJobChange('パラディン')} variant="outlined" color="primary">パラディン</Button>
        <Button onClick={() => funcJobChange('魔法戦士')} variant="outlined" color="primary">魔法戦士</Button>
        <Button onClick={() => funcJobChange('スーパースター')} variant="outlined" color="primary">スーパースター</Button>
        <Button onClick={() => funcJobChange('海賊')} variant="outlined" color="primary">海賊</Button> */}
        </Box>

        <Grid container spacing={4} justify="center">
          {
          (Object.keys(selectFilter) as (keyof kokoroFitFilter)[]).map((i) => (
            <Grid item key={i}>
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
    </div>
  );
};

export default FilterKokoro;
