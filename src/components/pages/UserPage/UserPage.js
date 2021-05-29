import React from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import CardProduto from '../../Cards/Cards';
import {Main, Filtro, Conteiner, Title, ContainerProducts, Foot, Lista, ListaContainer} from './Styled';
import { baseStyle, Button, ChakraProvider } from "@chakra-ui/react"
import { Container } from '@chakra-ui/layout';


export default class UserPage extends React.Component{
    state={
        servicos:[],
        servicosContratados:[],
        tipoService:"all",
        min:0,
        max:10000,
        ordem:"min-max",
        busca:""

    }
    componentDidMount(){
        this.getServices()
    }
    getServices = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'
        axios.get(url, {
            headers: {
                Authorization: "d2941f53-4b06-40c4-a403-922f99164edc"
            }
        })
            .then((res) => {
                console.log(res.data.jobs)
                this.setState({servicos: res.data.jobs })

            })
            .catch((err) => {
                alert('Nenhum job adicionado!')
                console.log(err)
            })
    }

    carregaContrato = (id) => {

        this.state.servicos.filter((s)=>{
            if(s.id == id){
                this.setState({servicosContratados:[...this.state.servicosContratados, s]})
            }
        })
        console.log("SERVICOS CONTRTADOS:",this.state.servicosContratados)
    }


    contratar = (id) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
        const body = {
            taken:true
        }
        console.log(body)
        axios.post(url, body, {
            headers: {
                Authorization: "d2941f53-4b06-40c4-a403-922f99164edc"
            }
        })
        .then((res) => {
            alert("Serviço Contratado!")
            this.carregaContrato(id);
        })
        .catch((err) => {
            alert('Houve um erro na contratação')
            console.log(err)
        })
    }

    delServicos = (id) => {
        let indexApagar = 0;
        this.state.servicosContratados.filter((s)=>{
            
            if(s.id == id){
                indexApagar = this.state.servicosContratados.indexOf(s);
            }
        })

        const listCopy = [...this.state.servicosContratados]
        listCopy.splice(indexApagar, 1)
        this.setState({servicosContratados:listCopy})
    }

    
/*
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
        const carregajobs= this.state.servicos.map((job)=>{
           return <CardProduto 
                    contratar={this.contratar}
                    servicoId={job.id}
                    price={job.price}
                    title={job.title}
                    description={job.description}
                    paymentMethod={job.paymentMethod}
                    installments={job.installments}
                    />
        })
        const servicosContratados=this.state.servicosContratados.map((name) => {
                return (
                    <ListaContainer>
                        <Lista>
                            {name.title}
                        </Lista>
                        <Button
                            colorScheme="purple"
                            variant="solid"
                            onClick={() => this.delServicos(name.id)}
                        >X
                        </Button>
                    </ListaContainer>
                )
            })
        
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
                            {carregajobs}
                        </ContainerProducts>
                    </div>

                    <div className="carrinho">
                        <Title>Serviços Contratados</Title>
                        <hr />
                        <div className="listaContratados">
                           {servicosContratados}
                        </div>

                    </div>
                </Conteiner>
                <Foot>
                     <Footer />
                </Foot>
            </Main>
        
        )    

    }
}
