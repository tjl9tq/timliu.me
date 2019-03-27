import React, { useState } from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import MusicPage from './pages/MusicPage';

const theme = createMuiTheme({
  palette: {
    primary: { main: blueGrey[800] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

const App = () => {
  const [page, setPage] = useState('Home');

  const currentPage = () => {
    switch (page) {
      case 'Home':
        return <HomePage />
      case 'Projects':
        return <ProjectsPage />
      case 'Artsy Stuff':
        return <MusicPage />
      case 'Misc':
        return <div>misc</div>
      default:
        return <div>home</div>
    }
  }

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar setPage={setPage} />
      <div style={{
        position: 'relative',
        top: '80px',
        width: '100%',
      }}>
          {currentPage()}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
