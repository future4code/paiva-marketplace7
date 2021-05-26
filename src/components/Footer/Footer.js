import React from 'react';
import { FooterMain } from './Styled';
import { FooterCenter } from './Styled';
import logo1 from './imgs/logo1.png';
import twitter from './imgs/twitter.png';
import instagram from './imgs/instagram.png';
import linkedin from './imgs/linkedin.png';
import git from './imgs/git.png';
import logo2 from './imgs/logo2.png';

export default class Footer extends React.Component{

    render(){
        return(
            <FooterMain>
                <img src={logo1} />
                <FooterCenter>
                 <FooterMain>
                   <img src={twitter} />
                   <img src={instagram} />
                   <img src={linkedin} />
                   <img src={git} />
                 </FooterMain>
                 <div>
                  <p>© 1995–2021 Copyright Labe Ninjas, Inc. All rights reserved.</p>
                 </div>
                </FooterCenter>
                <img src={logo2} />
            </FooterMain>
        )
            

    }
}
