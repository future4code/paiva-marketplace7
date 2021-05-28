import styled from "styled-components";


export const CartMain = styled.div`
padding: 1px;
margin: 10px;
border: 1px solid black;
p{
   padding-top:20px;
}
`

export const ContainerCartItens= styled.div`
display: grid;
gap: 4px;
`

export const ItemContainer = styled.div `
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
align-items: center;
`
