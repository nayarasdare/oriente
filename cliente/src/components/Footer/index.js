import React, { Component } from 'react';
import { Container} from './styles';

export default class Footer extends Component{
    render(){
        
        return (
            <Container >
                <h3>Presidente presidencia@fmo.esp.br</h3>
                <h3>Fone: (35) 99141-0157 </h3>
                <h3>Secretaria secretaria@fmo.esp.br</h3>
                <h3>Fone: (35) 99972-0557</h3>
                <h3>Comunicação comunicacao@fmo.esp.br</h3>
                <h3>Fone: (35) 98858-6715</h3>
            </Container>
        );
    }
}
