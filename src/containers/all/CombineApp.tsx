import {
  createStyles, CssBaseline, Grid, makeStyles, Theme,
} from '@material-ui/core';
import FilteredKokoro from 'containers/organisms/FilteredKokoro';

import FilterSection from 'containers/organisms/FilterSection';
import FitKokoro from 'containers/organisms/FitKokoro';
import Header from 'containers/organisms/Header';
import ShowResult from 'containers/organisms/ShowResult';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
  },
}));

const CombineApp:React.FC = () => {
  const x = 'jpeg';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <FilterSection />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={8} direction="column">
              <Grid container spacing={1} justify="center">
                <Grid item xs={12} justify="center">
                  <FitKokoro />
                </Grid>
              </Grid>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <FilteredKokoro />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <Grid container spacing={2}>
                <ShowResult />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      {/* <Grid container>
        <Grid item xs={8} direction="column">
          <Grid container spacing={1} justify="center">
           <Grid item xs={12}>
             <FitKokoro />
            </Grid>
          <Grid item xs={12}>
                      <FilteredKokoro />
          </Grid>

          <Grid item>
          <FilteredKokoro />
        </Grid>
        </Grid>
        <Grid item>
          <ShowResult />
        </Grid>
      </Grid> */}

      {x}
    </div>
  );
};

export default CombineApp;
