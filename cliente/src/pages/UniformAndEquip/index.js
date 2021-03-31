import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Content,DivLogos,HeadForm,Form } from './styles';
import cbo from '../../imgs/cbo.png'
import bandeira from '../../imgs/bandeira.png'

import camiseta from'../../imgs/camiseta.jpg'
import calca from'../../imgs/calca.jpg'
import ori  from'../../imgs/equi.ori.jpeg'
import cane  from'../../imgs/cane.ori.jpeg'
import tenis  from'../../imgs/tenis.jpeg'

export default class UniformAndEquip extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { loading } = this.state;
        const app_name = "<<Oriente>>"
        return (
            <>
                <Content>
                    <DivLogos>
                          <img src={bandeira}></img>
                          <img src={cbo}></img>

                    </DivLogos>
                    <Form method="POST" onSubmit={this.handleSubmit}>
                        <HeadForm>
                            <h2>{app_name}</h2>
                            <h2>Uniformes e Equipamentos</h2>
                        </HeadForm>
                         <div>
                            <img src={camiseta}></img>
                            <h3>Camisa: Também pode ser usada com mangas cumpridas.</h3>
                            <div id="subdiv" >
                                <img src={ori}></img>
                                <h3>Esses são alguns dos equipamentos particulares essenciais para uma corrida de orientação: A bússola para corredores mais avançados, sinaletica, para ser mais agil para ver os pontos e o chip para registrar os pontos no qual você passou.</h3>
                            </div>
                         </div>
                         <div>
                            <img src={calca}></img>
                            <h3>Calças: Geralmente confortável e leve para o melhor desempenho do atleta.</h3>
                         </div>
                         <div>
                             <img src={cane}></img>
                             <h3>Caneleira: Elas são indisensáveis pois nas corridas entramos muitos obstaculos.</h3>
                         </div>
                         <div>
                            <img src={tenis}></img>
                            <h3>Tênis: Esses tênis tem uma sola com borracha adesiva para oferecer a aderência correta para cada tipo de terreno.</h3>
                         </div>

                    </Form>
                    
                </Content>
            </>
        );
    }
}
