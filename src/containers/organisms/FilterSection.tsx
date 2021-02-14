import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import {
  Box,
  Divider, List, ListItem, ListItemText, Paper, Typography,
} from '@material-ui/core';
import OptionSection from 'containers/molecule/OptionSection';
import ColorSection from 'containers/molecule/ColorSection';

const drawerWidth = 300;

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
    // overflowY: 'auto',
  },
  colorSection: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },

  drawerPaper: {
    width: drawerWidth,
    // overflowY: 'auto',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    height: 200,
    width: 200,
    backgroundColor: 'pink',
  },
  drawerContainer: {
    overflow: 'hidden',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // pointerEvents: 'none',
    // cursor: 'not-allowed',
    // hover: 'hidden',
    // disableTouchRipple: 'true',
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

const FilterSection:React.FC = () => {
  const x = 'this is FilterSection';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Box className={classes.colorSection}>
          <Typography className={classes.colorText}>Color</Typography>
          <ColorSection />
        </Box>
        <br />
        <Divider />
        <br />
        <Box className={classes.colorSection}>
          <Typography className={classes.colorText}>効果</Typography>
          <OptionSection />
        </Box>

        <br />
        <br />
        <Divider variant="middle" />
        <br />

      </Drawer>

    </div>
  );
};

export default FilterSection;
