/* eslint-disable import/namespace */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from '@material-ui/core';
import ModalWin from 'containers/organisms/ModalWin';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  baseStatusFilter, optionFilterBefore, kokoroFit, kokoroFitFilter, selectKokoro, addKokoro, optionKind, selectDamageUp, statusChange, kokoro, selectColor, selectBaseStatus, selectDipsKokoro, selectAllKokoro, filsterDipsKokoro, selectFilterKokoro, selectFilterKokoro2,
} from '../../slices/draque';
import DataSolo from '../../Testdata/DataSolo.json';
import classes from './FilterKokoro.module.css';

const DisplayKokoro:React.FC = () => {
  const x = 'test';
  const dispatch = useDispatch();
  const selectFilter = useSelector(selectFilterKokoro);
  const selectFilter2 = useSelector(selectFilterKokoro2);
  const selectKokoroList = useSelector(selectAllKokoro);
  const [kokoroNum, setKokoroNum] = React.useState<string>('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const randomInt = (min:number, max:number):string => String(Math.floor(Math.random() * (max + 1 - min)) + min);

  const addKokoroDispath = (id:string) => {
    setKokoroNum(id);
    setIsOpen(true);
  };

  return (
    <div>
      <Grid container>
        {
          (Object.keys(selectFilter) as (keyof selectKokoro)[]).map((i) => (
            <Grid item xs={3}>
              <button type="button" onClick={() => addKokoroDispath(i)}>
                <img className={classes.btncirclestitch} alt={selectFilter[i].name} src={`${process.env.PUBLIC_URL}/pic/${selectFilter[i].imgpath}`} />
              </button>
              <Typography variant="h6">
                {selectFilter[i].name}
              </Typography>

            </Grid>
          ))
        }
      </Grid>
      <ModalWin kokoroModal={selectFilter[kokoroNum]} modalFlg={modalIsOpen} modalFunc={setIsOpen} />

    </div>
  );
};

export default DisplayKokoro;
