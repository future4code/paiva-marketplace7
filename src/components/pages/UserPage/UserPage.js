import React from 'react';
import Header from '../../Header/Header';

export default class UserPage extends React.Component{

    ninjaPage = () =>{
        this.props.choosePage("ninja")
    }

    render(){
        return(
            <div>
                <Header texto={'Seja um Ninja'} troca={this.ninjaPage}/>
                User Page
            </div>
        )
            

    }
}