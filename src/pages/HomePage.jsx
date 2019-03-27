import React from 'react';

import { Typography, withStyles, Divider } from '@material-ui/core';
import { styles } from './styles';

const HomePage = ({ classes }) => {
  return (
    <>
      <div className={classes.container}>
        <Typography variant="h5" className={classes.title}>
          About Me
        </Typography>
        <div>
        <Typography className={classes.text}>
          Hey! I'm Tim Liu. Front-end developer, musician, gamer, esports enthusiast. I grew up in Singapore and went to an international school, United World College of South East Asia. After graduating High School in Sigapore, I left to the United States to attend the University of Virginia where I studied Music and Computer Science. Now I'm working full-time as a Front-End Engineer in Durham. NC.

          <br />
          <br />
          Find me here:
          <br />
          <a href="https://www.linkedin.com/in/timothy-liu-1719aa7b/">LinkedIn</a>
          <br />
          <a href="https://github.com/tjl9tq">GitHub</a>
          <br />
          <a href="https://www.youtube.com/channel/UCtcoy5oCgxfjvIguILFfMig">YouTube</a>
          <br />
          <a href="https://soundcloud.com/tim-liu">SoundCloud</a>
        </Typography>
        </div>
        <Divider />
        <Typography variant="h5" className={classes.title}>
          Experience
        </Typography>
        <div className={classes.text}>
          <ul>
            <li>
              <b>Front-End Software Engineer</b> (July 2018 -)
              <br />
              STATS LLC (acquired Automated Insights March 2019), Durham, NC
              <br />
              <ul>
                <li>Maintained and built features for Automated Insight’s flagship product Wordsmith.</li>
                <li>Played a large role in creating Integration apps with BI tools.</li>
                <li>Built with TypeScript with React, Redux and bundled with WebPack.</li>
                <li>Setup the test suite with Mocha, Chai and Sinon.</li>
              </ul>
            </li>
            <br />
            <li>
              <b>Software Engineer Intern</b> (June 2018 - July 2018)
              <br />
              Automated Insights, Durham, NC
              <br />
              <ul>
                <li>
                  Developed basic skills with React and Redux and version control with Git
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Divider />
        <Typography variant="h5" className={classes.title}>
          Education
        </Typography>
        <div className={classes.text}>
          <ul>
            <li>
              Bachelor of Arts in <b>Computer Science</b> and <b>Music</b>
              <br />
              University of Virginia, CharlottesVille VA
            </li>
            <ul>
              <li>
                Dean’s List (2016)
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={classes.picture}>
        <img src='./face.jpg' />
      </div>
    </>
  )
}

export default withStyles(styles)(HomePage);
