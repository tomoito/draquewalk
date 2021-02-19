/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider, Hidden, IconButton, Toolbar, Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import OptionSection from 'containers/molecule/OptionSection';
import ColorSection from 'containers/molecule/ColorSection';
import OrderSection from 'containers/molecule/OrderSection';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  colorSection: {
    marginLeft: '1rem',
    marginRight: '1rem',
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
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = useTheme();

  const drawer = (
    <div className={classes.toolbar}>
      <Box className={classes.colorSection}>
        <Typography className={classes.colorText}>Color</Typography>
        <ColorSection />
      </Box>
      <br />
      <Divider />
      <Box className={classes.colorSection}>
        <Typography className={classes.colorText}>並び替え</Typography>
        <OrderSection />
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
    </div>
  );
  const container = undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ドラクエウォークのココロを検索して枠に入れてみよう
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

    </div>
  );
};

export default FilterSection;
