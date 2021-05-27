import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {Filtro, Conteiner, Title} from './Styled';
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
            <div>
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
                        {/*AQUI VAI O CARDSERVICES*/}
                    </div>

                    <div>
                        <Title>Carrinho</Title>
                        <hr />
                        <br />
                        {/*AQUI VAI O CARRINHO*/}
                    </div>
                </Conteiner>
               
                <Footer />
            </div>
        
        )    

    }
}