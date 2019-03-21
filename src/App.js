import React, { Component } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import AppBar from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[800] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
