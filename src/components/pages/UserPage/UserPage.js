import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import CardProduto from '../../Cards/Cards';
import {Main, Filtro, Conteiner, Title, ContainerProducts, Foot} from './Styled';
import { Container } from '@chakra-ui/layout';


export default class UserPage extends React.Component{
    state={
        produtos:[],
        tipoService:"all",
        min:0,
        max:10000,
        ordem:"min-max",
        busca:""

    }
/*
    getServices = ()=>{

    }
    Filter = ()=>{
        
    }
    ordenar = ()=>{
        
    }
    addAoCarrinho = ()=>{
        
    }
    removerDoCarrinho = ()=>{
        
    }
    cancelarTodosServices = ()=>{
        
    }
    solicitarECancelarServices = ()=>{
        
    }

*/
    ninjaPage = () =>{
        this.props.choosePage("ninja")
    }

    render(){
        return(
            <Main>
                <Header texto={'Seja um Ninja'} troca={this.ninjaPage}/>
                <Filtro>
                    <input placeholder="Nome do serviço" />
                    <select>
                        <option>Tipo de serviço</option>
                        <option>Todos</option>
                    </select>
                    <input placeholder="Valor mínimo" />
                    <input placeholder="Valor máximo" />
                    <select>
                        <option>Ordenar por</option>
                        <option>Menor preço</option>
                        <option>Maior preço</option>
                    </select>
                </Filtro>
                <Conteiner>
                    <div>
                        <Title>Lista de Serviços</Title>
                        <hr />
                        <br />
                        <ContainerProducts>
                            <CardProduto />
                            <CardProduto />
                            <CardProduto />
                            <CardProduto />
                            <CardProduto />
                            <CardProduto />
                        </ContainerProducts>
                    </div>

                    <div className="carrinho">
                        <Title>Carrinho</Title>
                        <hr />
                        <br />
                        <div></div>
                        {/*AQUI VAI O CARRINHO*/}
                    </div>
                </Conteiner>
                <Foot>
                     <Footer />
                </Foot>
            </Main>
        
        )    

    }
}
