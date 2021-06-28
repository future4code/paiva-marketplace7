import React from 'react';
import axios from 'axios';
import Style, { Main, NinjaCart, NinjaForm, Lista, ListaContainer, HeaderContainer, FooterCont} from './Styled'
import { baseStyle, Button, ChakraProvider } from "@chakra-ui/react"
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import UserPage from '../UserPage/UserPage';



export default class NinjaPage extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: "",
        dueDate: "",
        nome: []
    }

    componentDidMount() {
        this.getJobs()
    }
    componentDidUpdate() {
        this.getJobs()
    }


    onChangeTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    onChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    onChangePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    onChangePayMethod = (e) => {
        this.setState({ paymentMethods: e.target.value })
    }

    onChangeDueDate = (e) => {
        this.setState({ dueDate: e.target.value })
    }

    criarJob = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'
        const body = {
            "title": this.state.title,
            "description": this.state.description,
            "price": Number(this.state.price),
            "paymentMethods": [this.state.paymentMethods],
            "dueDate": this.state.dueDate
        }
        console.log(body)
        axios.post(url, body, {
            headers: {
                Authorization: "d2941f53-4b06-40c4-a403-922f99164edc"
            }
        })
            .then((res) => {
                alert('Job foi criado com sucesso!')
                console.log(res)
                this.setState({ title: "", description: "", price: "", paymentMethods: "", dueDate: "" })
            })
            .catch((err) => {
                alert('nao')
                console.log(err)
            })
    }


    getJobs = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'
        axios.get(url, {
            headers: {
                Authorization: "d2941f53-4b06-40c4-a403-922f99164edc"
            }
        })
            .then((res) => {
                console.log(res.data.jobs)
                this.setState({ nome: res.data.jobs })

            })
            .catch((err) => {
                alert('Nenhum job adicionado!')
                console.log(err)
            })
    }

    delJobs = (id) => {

        axios.delete(`https://labeninjas.herokuapp.com/jobs/${id}`, {
            headers: {
                Authorization: "d2941f53-4b06-40c4-a403-922f99164edc"
            }
        })
            .then((res) => {
                alert('Serviço deletado!')
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    userPage = () =>{
        this.props.choosePage("user")
    }

    render() {
        return (
            <Main>
                <HeaderContainer>
                <Header texto={'Nossos Serviços'} troca={this.userPage}/>
                </HeaderContainer>
                <NinjaForm>
                    <div className="flexColumn">
                        <h1>Seja Um Ninja:</h1>
                        <label>Nome:</label>
                        <input
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            type='text'
                            placeholder='Nome do Serviço'
                        />
                        <label>Descrição:</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            placeholder='Descrição'
                        />
                        <label>Preço:</label>
                        <input
                            placeholder='Preço'
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                        <label>Tipo de pagamento:</label>
                        <select
                            placeholder='Tipo de pagamento'
                            value={this.state.paymentMethods}
                            onChange={this.onChangePayMethod}>
                            <option value="cartao-credito">Cartão de crédito</option>
                            <option value="cartao-debito">Cartão de débito</option>
                            <option value="boleto-bancario">Boleto bancário</option>
                            <option value="paypal">Paypal</option>
                        </select>
                        <input
                            onChange={this.onChangeDueDate}
                            value={this.state.dueDate}
                            placeholder='Prazo de pagamento (AAAA-MM-DD)'
                        />
                    
                        <ChakraProvider >
                            <Button
                                colorScheme="purple"
                                variant="solid"
                                onClick={this.criarJob}
                            >Criar Anúncio!
                                </Button>
                        </ChakraProvider>
                    </div>
                <NinjaCart>
                    <h2>Serviços Cadastrados</h2>
                    {this.state.nome.map((name) => {
                        return (
                            <ListaContainer>
                                <Lista>
                                    {name.title}
                                </Lista>
                                <Button
                                    colorScheme="purple"
                                    variant="solid"
                                    onClick={() => this.delJobs(name.id)}
                                >X
                                </Button>
                            </ListaContainer>
                        )
                    })}

                </NinjaCart>
                </NinjaForm>

                <Footer />
            </Main>
        )}}