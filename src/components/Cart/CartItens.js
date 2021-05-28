import React from 'react';
import { ItemContainer } from './Styled';




export default class CartItens extends React.Component{

    render(){
        return(
            <div>
                <ItemContainer>
                        <p>{this.props.cartItemServico.title}</p>
                        <p>R$ {this.props.cartItemServico.price},00</p>
                        <p><button>Remover</button></p>
                </ItemContainer>

            </div>
        )
            

    }
}