import React from 'react';
import { CartMain, ContainerCartItens } from './Styled';
import CartItens from './CartItens.js'



export default class Cart extends React.Component{
    totalValorCart = () => {
        let total = 0
        for (let servico of this.props.servicosCarrinho){
            total += servico.price * 1
        }
        return total
    }

    render(){
        return(
            <CartMain>
               <h1>Carrinho</h1>
               <hr />
               <ContainerCartItens>
                   {this.props.servicosCarrinho.map((servico) => {
                    return <CartItens cartItemServico = { servico }/> 
                })}
               </ContainerCartItens>
              <hr />
              <p>Valor total: R$ { this.totalValorCart() },00</p>
              <br />
              <button>contratar</button>
            </CartMain>
        )
            

    }
}