import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (themes) => createStyles({
  list: {
    width: 250,
    marginTop: '20px'
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    backgroundColor: themes.primary,
  }
});

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, open, close } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home', 'Projects', 'Music', 'Resume'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div >
        <Drawer open={open} onClose={close} styles={{ backgroundColor: 'black'}}>
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);