import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from './utils/theme';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom"
const Container = styled.div `
  display:flex;
  width:100%;
  height:100vh;
  background:${({theme})=>theme.bg};
  color:${({theme})=>theme.text_primary};
 
  transition:all 0.2 ease;
  
  `;

const Wrapper = styled.div `
  height:100%;
  postion:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:3;
  
  `

function App() {
    return ( <
        ThemeProvider theme = { darkTheme } >
        <
        Container >
        <
        Wrapper >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/Create'
        element = { < CreatePost / > }
        />

        <
        /Routes> <
        /BrowserRouter> <
        /Wrapper>

        <
        /Container> <
        /ThemeProvider>
    );
}

export default App;