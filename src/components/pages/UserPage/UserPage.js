import React from "react";
import CardProduto from "../../Cards/Cards";
import Header from "../../Header/Header";
import styled from 'styled-components';

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

export default class UserPage extends React.Component {
  ninjaPage = () => {
    this.props.choosePage("ninja");
  };

  render() {
    return (
      <div>
        <Header texto={"Seja um Ninja"} troca={this.ninjaPage} />
        <ContainerProducts>
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </ContainerProducts>
      </div>
    );
  }
}
