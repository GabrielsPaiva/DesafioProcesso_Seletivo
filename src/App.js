import React from 'react';
import { createGlobalStyle } from 'styled-components';

// components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
`

export default class App extends React.Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}