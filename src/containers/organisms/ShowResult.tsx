import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { selectBaseStatus, selectOffenceStatus } from 'slices/draque';
import type { baseStatusFilter, optionFilterBefore } from 'slices/draque';
import { useSelector } from 'react-redux';

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
      <Typography variant="h4">ステータス</Typography>
      {
                (Object.keys(baseSum) as (keyof baseStatusFilter)[]).map((dmgUp) => (
                  <Typography variant="h5">
                    {dmgUp}
                    :
                    {baseSum[dmgUp]}
                  </Typography>
                ))

      }
      <br />
      <Typography variant="h4">特殊オプション</Typography>
      {
                (Object.keys(optionSum) as (keyof optionFilterBefore)[]).map((dmgUp) => (
                  optionSum[dmgUp] === 0 ? ''
                    : (
                      <Typography variant="h5">
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
