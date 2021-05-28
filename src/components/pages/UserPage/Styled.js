import styled from "styled-components";

export const Main=styled.div`
    width:100%;
    position:absolute;
    padding: 0;
    margin: 0;
    overflow-x: hidden; //Esconde a barra de rolagem vertical
`

export const Filtro = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:4px;
    margin-top: 10px;
    margin-bottom:15px;
    input{
        border:1px solid #7660C3;
        padding:3px;
        border-radius:5px;
    }
    select{
        background-color:#eee;
        color: gray;
        padding:3px;
    }
`
export const Conteiner=styled.div`
    margin:0;
    padding:0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    .carrinho{
        max-width:25.4vw;
    }
`
export const Title=styled.p`
    text-align:center;
    padding:6px;
`
export const ContainerProducts = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 70vw;
    padding: 8px;
    margin-top: 10px;
    border-right: 1px solid #9479f9;
`
export const Foot=styled.div`
    position: relative;
    bottom:0;
    left:0;
    width: 99vw;
`
