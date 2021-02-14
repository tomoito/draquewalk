import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import CustomButton from 'containers/atoms/CustomButton';
import { colorChange, selectColor } from 'slices/draque';
import type { colorKind, colorFilter } from 'slices/draque';
import { useDispatch, useSelector } from 'react-redux';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'hidden',
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
    padding: '0 30px',
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

const ColorSection:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  const handleChangeBase = (color: colorKind) => {// eslint-disable-line
    dispatch(colorChange(color));
  };

  return (
    <div>
      <Grid container spacing={2}>
        {
        (Object.keys(color) as (keyof colorFilter)[]).map((i) => (
          <Grid item xs={3}>
            <CustomButton defaultColor="white" themeColor="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" handleChangeBase={() => handleChangeBase(i)} dispShow={i} />
          </Grid>
        ))
      }
      </Grid>
    </div>
  );
};

export default ColorSection;
