import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, Heading, Paragraph } from 'grommet';
import Header from '../../components/Header';
import theme from './theme';
import { StyledApp } from './styles';

class App extends Component {
  render() {
    return (
      <StyledApp theme={theme}>
        <Box
          fill
          flex='grow'
        >
          <Header>
            <Heading color='white'>welcome to grommet react</Heading>
          </Header>
          <Box
            fill
            align='center'
            flex='grow'
          >
            <Router>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() =>
                    <Paragraph
                      textAlign='center'
                      size='large'
                    >
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </Paragraph>
                  }
                />
                <Route
                  render={() =>
                    <Paragraph
                      textAlign='center'
                      size='large'
                    >
                      Page not found.
                    </Paragraph>
                  }
                />
              </Switch>
            </Router>
          </Box>
        </Box>
      </StyledApp>
    );
  }
}

export default App;
