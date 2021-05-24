import React, { Component } from 'react'
import styled from 'styled-components';


/*Com de fundo para identificar a área do Container na tela e testar styled-components*/
const Container = styled.div`
background-color: lightblue;
`

export class AppContainer extends Component {
  render() {
    return (
      <Container>
        <p>Pronto para começar!</p>
      </Container>
    )
  }
}
