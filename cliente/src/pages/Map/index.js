import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Content,DivLogos,HeadForm,Form } from './styles';
import cbo from '../../imgs/cbo.png'
import bandeira from '../../imgs/bandeira.png'
import mapa from '../../imgs/mapa.png'

export default class Map extends Component {
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
                            <h2>Mapa e Simbologia</h2>
                        </HeadForm>
                        <img src={mapa}></img>

                    </Form>
                </Content>
            </>
        );
    }
}
