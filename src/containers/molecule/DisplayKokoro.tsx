/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/namespace */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from '@material-ui/core';
import ModalWin from 'containers/organisms/ModalWin';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useGaTrackPage from 'hooks/AnaHooks';
import {
  baseStatusFilter, optionFilterBefore, kokoroFit, kokoroFitFilter, selectKokoro, addKokoro, optionKind, selectDamageUp, statusChange, kokoro, selectColor, selectBaseStatus, selectDipsKokoro, selectAllKokoro, filsterDipsKokoro, selectFilterKokoro2,
} from '../../slices/draque';
import DataSolo from '../../Testdata/DataSolo.json';
import classes from './FilterKokoro.module.css';

const DisplayKokoro:React.FC = () => {
  const x = 'test';
  const dispatch = useDispatch();
  const selectFilter2 = useSelector(selectFilterKokoro2);
  const selectKokoroList = useSelector(selectAllKokoro);
  const [kokoroNum, setKokoroNum] = React.useState<string>('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const randomInt = (min:number, max:number):string => String(Math.floor(Math.random() * (max + 1 - min)) + min);

  const addKokoroDispath = (id:string) => {
    setKokoroNum(id);
    setIsOpen(true);
    // useGaTrackPage('/kokoro');
  };

  return (
    <div>
      <Grid container spacing={3}>
        {
          selectFilter2.map((i) => (
            <Grid item key={i}>
              <button type="button" onClick={() => addKokoroDispath(i)}>
                <img className={classes.btncirclestitch} alt="hoge" src={`${process.env.PUBLIC_URL}/pic/${selectKokoroList[i].imgpath}`} />
              </button>
              <Typography variant="h6">
                {selectKokoroList[i].name}
              </Typography>

            </Grid>
          ))
        }
      </Grid>
      <ModalWin kokoroModal={selectKokoroList[kokoroNum]} modalFlg={modalIsOpen} modalFunc={setIsOpen} />

    </div>
  );
};

export default DisplayKokoro;
