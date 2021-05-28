import React from 'react';
import Style, { LogoMainPage, MainContainer, MainPageContainer,IntroApp, SelectionButton, Buttons } from './Styled'
import img from '../../../img/logo-labeninjas.png'
import '../../../index.css'
import { Button, ChakraProvider } from "@chakra-ui/react"




export default class MainPage extends React.Component{

    selectNinjaPage = () =>{
        this.props.choosePage("ninja")
    }
    selectUserPage = () =>{
        this.props.choosePage("user")
    }

    render(){
        return(
            <MainPageContainer>
                <IntroApp>
                    <MainContainer>
                        <LogoMainPage src={img}/>
                        <h1>O talento certo, no momento certo.</h1>
                    </MainContainer>
                    <SelectionButton>
                        <ChakraProvider >
                            <Button 
                            colorScheme="purple" 
                            variant="solid"
                            onClick={this.selectNinjaPage}
                            >Seja um Ninja
                            </Button>
                            <Button 
                            colorScheme="purple" 
                            variant="outline"
                            onClick={this.selectUserPage}
                            >Contrate um Ninja</Button>
                        </ChakraProvider>
                    </SelectionButton>
                </IntroApp>
            </MainPageContainer>
        )
            

    }
}