import styled from "styled-components";


export const Main = styled.div`
    width:100%;
    display:flex;
`

export const NinjaForm = styled.div`
    margin-top:60px;
    padding:8px 24px 24px 24px;
    h1{
        font-size:100px;
    }
    width:200%;
    display:flex;
    flex-direction:column;
    background-color:#F5F4FC;
    label{
        margin:8px;
    }
    input{
        margin:8px;
        border-radius:10px;
    }
    textarea{
        border-radius:10px;
        margin:8px;
        height:100px;
        justify-content:flex-start;
        vertical-align:top;
    }
    select{
        margin:8px;
        border-radius:10px;
    }
`
export const HeaderContainer = styled.div`
    position:fixed;
    top:0;
    width:100%;
`

export const NinjaCart = styled.div`
margin-top:60px;
    padding:4px;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-left:2px solid lightgray;
    background-color:#F5F4FC;
    h2{
        font-size:28px;
        padding-top:64px;
        margin-bottom:60px;
    }
`
export const Lista = styled.p`
    padding:8px;

`

export const ListaContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:8px;
    width:100%;
    border-bottom:1px solid lightgray;
    button{
        background
    }
`