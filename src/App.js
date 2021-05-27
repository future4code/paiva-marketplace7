import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import styled, { ThemeConsumer } from 'styled-components';
import MainPage from './components/pages/MainPage/MainPage';
import React from 'react';
import NinjaPage from './components/pages/NinjaPage/NinjaPage';
import UserPage from './components/pages/UserPage/UserPage';
import { ChakraProvider } from "@chakra-ui/react"
import axios from 'axios'

const MainApp = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`


export default class App extends React.Component {

  
  state = {
    page: "main"
  }

 
  selectedPage = (page) =>{
    this.setState({page: page})
  }


  renderPage = () =>{
    switch (this.state.page){
      case "ninja":
        return <NinjaPage/>
      case "user":
        return <UserPage/>
      default:
        return <MainPage choosePage={this.selectedPage}/>
    }
  }

  render(){
    const showPage = this.renderPage();
    return(
      <ChakraProvider>
        {showPage}
      </ChakraProvider>
    );
  }
}


