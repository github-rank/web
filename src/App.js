import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FiltersPage from './components/FiltersPage';

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
    		<FiltersPage />
  		</MuiThemeProvider>
    );
  }
}
