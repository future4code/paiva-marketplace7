import React from 'react';
import Style, { HeaderMain, Img, Botao} from './Styled'
import { Button, ChakraProvider } from "@chakra-ui/react"
import logo from '../../img/logoHeader.png'



export default class Header extends React.Component{

   
    render(){
        return(
            <HeaderMain>
                 <Botao>
                    <ChakraProvider >
                        <Button 
                        onClick={this.props.troca}
                        colorScheme="#7660C3" 
                        border= '1px'
                        borderColor="white"
                        variant="solid"
                        >
                        {this.props.texto}
                        </Button>
                        </ChakraProvider>
                </Botao>
                <Img>
                    <img src={logo} />
                </Img>
                
            </HeaderMain>
        )
            

    }
}