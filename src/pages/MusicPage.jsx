import React from 'react'

import { Typography, withStyles, Divider } from '@material-ui/core';
import { styles } from './styles';

const ProjectsPage = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        Music
      </Typography>
      <Typography className={classes.text}>
        Music has always been one of my primary passions. I've played piano for 15 years of my life. Played violin in orchestras, bass guitar in jazz and rock bands, sang and directed a capella, lead a rock/pop/jazz band, studied instrumental conducting. I love collaborating in an ensemble environment.
        <br />
        <br />
        I've got a YouTube channel featuring acoustic covers and other musical things, check it out here:
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kTfnOU__S-s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br />
        <br />
      </Typography>
      <Divider />
      <Typography variant="h5" className={classes.title}>
        Animation
      </Typography>
      <Typography className={classes.text}>
        I took a 3D Animation course and enjoyed it a lot! Unfortunately I currently don't have the bandwidth nor the creative capabilities to pursure more animation. Hopefully in the future I can dive more into it.
        <br />
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WUnWtGWnNP4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>      </Typography>
      <Divider />
    </div>
  )
}

export default withStyles(styles)(ProjectsPage);
