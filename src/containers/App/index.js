import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Header from '../../components/Header';
import theme from './theme';
import { StyledApp } from './styles';

class App extends Component {
  render() {
    return (
      <StyledApp theme={theme}>
        <Box fill='vertical'>
          <Header>
            <Heading color='white'>welcome to grommet react</Heading>
          </Header>
          <Box align='center'>
            <Paragraph
              textAlign='center'
              size='large'
            >
              To get started, edit <code>src/App.js</code> and save to reload.
            </Paragraph>
          </Box>
        </Box>
      </StyledApp>
    );
  }
}

export default App;
