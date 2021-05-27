import styled from "styled-components";

export const Filtro = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:4px;
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
    display:flex;
    justify-content: space-between;
    align-items:center;
    div{
        height:65vh;  //SERÁ APAGADO PARA ENTRADA DOS DADOS NESTE CAMPO
    }
`
export const Title=styled.p`
    text-align:center;
    display:inline-block;
    width: 40vw;
    padding:6px;
`