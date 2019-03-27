import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import SideMenu from './SideMenu';

const styles = (theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const ButtonAppBar = (props) => {
  const [open, setOpen] = useState(false);

  const openSideMenu = () => setOpen(true);
  const closeSideMenu = () => setOpen(false);

  const { classes, setPage } = props;
  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" onClick={openSideMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            timliu.me
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu
        open={open}
        close={closeSideMenu}
        setPage={setPage}
      />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(ButtonAppBar);