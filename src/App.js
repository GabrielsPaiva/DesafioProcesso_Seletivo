import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export default class App extends React.Component {
  
  render() {
    return (
      <>
        <GlobalStyle/>
        <Header/>
      </>
    )
  }
}