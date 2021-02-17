import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { selectBaseStatus, selectOffenceStatus } from 'slices/draque';
import type { baseStatusFilter, optionFilterBefore, orderFilter } from 'slices/draque';
import { useSelector } from 'react-redux';
import styles from './ResultStatus.module.css';

const useStyles = makeStyles(() => createStyles({
  txtfiedl: {
    padding: 6,
  },
  txt: {
    textAlign: 'left',
  },
}));

const ShowResult:React.FC = () => {
  const classes = useStyles();
  const baseSum = useSelector(selectBaseStatus);
  const optionSum = useSelector(selectOffenceStatus);

  return (

    <div className={classes.txt}>
      <div className={styles.box1}>
        <Typography variant="h4">ステータス!</Typography>
      </div>

      {
                (Object.keys(baseSum) as (orderFilter)[]).map((dmgUp) => (
                  <Typography variant="h5" key={dmgUp}>
                    {dmgUp}
                    :
                    {baseSum[dmgUp]}
                  </Typography>
                ))

      }

      <br />
      <div className={styles.box1}>

        <Typography variant="h4">特殊オプション</Typography>
      </div>
      {
                (Object.keys(optionSum) as (keyof optionFilterBefore)[]).map((dmgUp) => (
                  optionSum[dmgUp] === 0 ? ''
                    : (
                      <Typography variant="h5" key={dmgUp}>
                        {
                        dmgUp
                      }
                        :
                        {optionSum[dmgUp]}
                      </Typography>

                    )
                ))
      }
    </div>
  );
};

export default ShowResult;
