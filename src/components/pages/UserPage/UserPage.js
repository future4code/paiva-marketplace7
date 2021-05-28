import React from "react";
import CardProduto from "../../Cards/Cards";
import Header from "../../Header/Header";
import styled from 'styled-components';
import Cart from '../../Cart/Cart.js'
import axios from "axios"


const ContainerProducts = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 80vw;
padding: 20px;
margin-top: 10px;
margin-left: 30px;
`
const ProductCart = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Auth = 'd2941f53-4b06-40c4-a403-922f99164edc'
const baseURL= 'https://labeninjas.herokuapp.com'

export default class UserPage extends React.Component {
  state={
    servicosCadastrados:[],
    servicosCart:[
      {
          title:'Cortar grama',
          price:'20'

    },
    {
      title:'Cortar grama',
      price:'20'

},
{
  title:'Cortar grama',
  price:'20'

}
  ]
  }

  ninjaPage = () => {
    this.props.choosePage("ninja");
  };

  componentDidMount(){
    this.getAllJobs();
  }

  getAllJobs = async () =>{
    const header = {
      headers:{
        Authorization: Auth
      }
    };
    axios.get(`${baseURL}/jobs`, header)
    .then((res) => {
      this.setState({servicosCadastrados: res.data.jobs})
      console.log('produtos cadastrados',this.state.servicosCadastrados)
     
    })
    .catch((err) => {
      // alert(err)
    })
  }

 


  render() {
    return (
      <div>
        <Header texto={"Seja um Ninja"} troca={this.ninjaPage} />
        <ProductCart>
          <ContainerProducts>
            <CardProduto /> 
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </ContainerProducts>
          <Cart servicosCarrinho={this.state.servicosCart}/>
        </ProductCart>
      </div>
    );
  }
}
