import React from 'react'

import { Typography, createStyles, withStyles, Divider } from '@material-ui/core';


const styles = createStyles({
  container: {
    padding: '40px 450px'
  },
  title: {
    fontWeight: 'bold',
    paddingTop: '50px'
  },
  text: {
    textAlign: 'left',
    fontSize: '18px',
    padding: '20px 0',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  picture: {
    position: "fixed",
    left: '30px',
    top: '200px',
  }
});

const ProjectsPage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.title}>
          Hi-Lo
      </Typography>
      <div className={classes.text}>
        Simple card game using the <a href="https://www.deckofcardsapi.com">Deck of Cards API</a>. Written in <b>TypeScript</b> with <b>React</b> and <b>Redux</b> and bundled and compiled with <b>Webpack</b>. Test suite setup with <b>Mocha, Chai</b> and <b>Sinon</b>.
        <br />
        <br />
        <a href="hilo">Demo</a>
        <br />
        <a href="https://github.com/tjl9tq/Hi-Lo">Source</a>
      </div>
      <Divider />
      <Typography variant="h5" className={classes.title}>
          ConPhoto
      </Typography>
      <div className={classes.text}>
        I wanted to convert image data into sound data. Using <b>Python</b>, the app parses image data with the OpenCV library and generates MIDI data with the MIDIUtil library.
        <br />
        <br />
        Read more about it <a>here</a>. (coming soon)
      </div>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(ProjectsPage);
