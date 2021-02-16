/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import type{
  kokoro, baseStatusFilter, optionFilterBefore, selectKokoro, kokoroFit,
} from 'slices/draque';
import { addKokoro, statusChange, selectJob } from 'slices/draque';
import Modal from 'react-modal';
import {
  Box, Button, Grid, Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { JobFavariteTeisu } from 'constants/Teisu';

Modal.setAppElement('#root');

type ModalProps={
  kokoroModal:kokoro,
  modalFlg:boolean,
  modalFunc:(i:boolean)=>void
}

const modalStyle:Modal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  img: {
    textAlign: 'center',
  },
  imgWaku: {
    width: 100,
    height: 100,
  },

  btn: {
    padding: '10px',
    marginLeft: '5px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '10 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  colorText: {
    textAlign: 'left',
    fontSize: '20px',
  },
}));

const ModalWin:React.FC<ModalProps> = ({
  kokoroModal, modalFlg, modalFunc,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const jobPick = useSelector(selectJob);

  // const [modalIsOpen, setIsOpen] = React.useState(flg);
  const addKokoroDispath = (id:string) => {
    const hoge = id as kokoroFit;
    const addK:selectKokoro = {
      id: hoge,
      kokoro: kokoroModal,
    };
    dispatch(addKokoro(addK));
    dispatch(statusChange());
    modalFunc(false);
  };

  return (
    <div>
      <Modal isOpen={modalFlg} style={modalStyle} onRequestClose={() => modalFunc(false)}>
        <button style={{ left: '50%', backgroundColor: 'pink' }} type="button" onClick={() => modalFunc(false)}>Close Modal</button>

        {
          kokoroModal ? (
            <>

              <Typography variant="h6">
                {kokoroModal.cost}
                :
                {kokoroModal.color}
                :
                {kokoroModal.name}

              </Typography>
              <Box className={classes.img}>
                <img alt={kokoroModal.name} src={`${process.env.PUBLIC_URL}/pic/${kokoroModal.imgpath}`} />
              </Box>

              <Grid container direction="row" spacing={2}>
                <Grid item spacing={4}>
                  {
                  (Object.keys(kokoroModal.status) as (keyof baseStatusFilter)[]).map((dmgUp) => (
                    <Typography>
                      {dmgUp}
                      :
                      {kokoroModal.status[dmgUp]}
                    </Typography>
                  ))
              }
                </Grid>
                <Grid item spacing={3}>
                  {
                  (Object.keys(kokoroModal.option) as (keyof optionFilterBefore)[]).map((dmgUp) => (
                    <Typography>
                      {dmgUp}
                      :
                      {kokoroModal.option[dmgUp]}

                    </Typography>
                  ))
              }
                  {
                kokoroModal.追加スキル !== '' ? (
                  <div>
                    <Typography>
                      保有スキル:
                      {kokoroModal.追加スキル}
                    </Typography>
                  </div>
                ) : ''
              }
                </Grid>
              </Grid>

            </>
          ) : 'poka'
        }
        <Box className={classes.btn}>
          <Button className={classes.btn} variant="contained" onClick={() => addKokoroDispath('1')}>{JobFavariteTeisu[jobPick]['1']}</Button>
          <Button className={classes.btn} variant="contained" onClick={() => addKokoroDispath('2')}>{JobFavariteTeisu[jobPick]['2']}</Button>
          <Button className={classes.btn} variant="contained" onClick={() => addKokoroDispath('3')}>{JobFavariteTeisu[jobPick]['3']}</Button>
          <Button className={classes.btn} variant="contained" onClick={() => addKokoroDispath('4')}>{JobFavariteTeisu[jobPick]['4']}</Button>
        </Box>
      </Modal>

    </div>
  );
};

export default ModalWin;
