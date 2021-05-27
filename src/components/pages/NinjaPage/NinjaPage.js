import React from 'react';
import Header from '../../Header/Header';
import UserPage from '../UserPage/UserPage';

export default class NinjaPage extends React.Component{

    userPage = () =>{
        this.props.choosePage("user")
    }
    
    render(){
        return(
            <div>
                <Header texto={'Seja um Ninja'} troca={this.userPage}/>
                Ninja Page
            </div>
        )
            

    }
}