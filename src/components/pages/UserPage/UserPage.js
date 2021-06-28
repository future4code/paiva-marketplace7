import React from 'react';
import axios from 'axios';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import CardProduto from '../../Cards/Cards';
import photo from './imgs/img.png';
import {Main, Filtro, Conteiner, Title, ContainerProducts, Foot, Lista, ListaContainer} from './Styled';
import { baseStyle, Button, ChakraProvider } from "@chakra-ui/react"
import { Container } from '@chakra-ui/layout';


export default class UserPage extends React.Component{
    state={
        servicos:[],
        servicosContratados:[],
        tipoService:"all",
        min:0,
        max:1000000,
        ordem:"maior",
        buscaProduto:""

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
              

                this.setState({servicos: res.data.jobs })
                //FILTRO
                const listaOrdenada = this.state.servicos
                .filter((produto) => this.state.max ? produto.price <= this.state.max : true)
                .filter((produto) => this.state.min ? produto.price >= this.state.min : true)
                .filter((produto) => this.state.buscaProduto ? produto.title.includes(this.state.buscaProduto) : true)
                .sort((a, b) =>
                    this.state.ordem === "menor" ? a.price - b.price : b.price - a.price
                    );

                //console.log(this.state.servicos)
                //console.log(res.data.jobs)
                // console.log("-----------------------",this.state.servicos)
                // console.log("-----------------------",listaOrdenada)

                this.setState({servicos: listaOrdenada })
                console.log("-----------------------",this.state.servicos)

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


    ninjaPage = () =>{
        this.props.choosePage("ninja")
    }
    //Começa o Filtro
    onChangeMinimo = (event) => {
        this.setState({ min: event.target.value })
    }

    onChangeMaximo = (event) => {
        this.setState({ max: event.target.value })
    }

    onChangeBusca = (event) => {
        this.setState({ buscaProduto: event.target.value })
    }

    ordena = (e) => {
        this.setState({ ordem: e.target.value })
        this.getServices()
       // console.log(e.target.value)
    }
    // Fim do Filtro
    Refresh = ()=>{this.getServices()}
    
    render(){
        // const ordenaListaFiltrada = this.ordenarListaFiltrada();
        const carregajobs= this.state.servicos.map((job)=>{
           return <CardProduto 
                    photos={photo}
                    contratar={this.contratar}
                    servicoId={job.id}
                    price={job.price}
                    title={job.title}
                    description={job.description}
                    paymentMethod={job.paymentMethods}
                    installments={"12x"}
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
                    <input placeholder="Nome do serviço" onChange={this.onChangeBusca}/>
                    <select>
                        <option>Tipo de serviço</option>
                        <option>Todos</option>
                    </select>
                    <input placeholder="Valor mínimo" onChange={this.onChangeMinimo} />
                    <input placeholder="Valor máximo" onChange={this.onChangeMaximo} />
                    <Button
                        colorScheme="purple"
                        variant="solid"
                        onClick={this.Refresh}
                    >Ir
                    </Button>

                    <select onChange={this.ordena}>
                        <option value="nothing">Ordenar por</option>
                        <option value="maior">Maior preço</option>
                        <option value="menor">Menor preço</option>
                    </select>
                </Filtro>
                <Conteiner>
                    <div className="cards">
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
