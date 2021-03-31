import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Content,DivLogos,HeadForm,Form} from './styles';
import cbo from '../../imgs/cbo.png'
import bandeira from '../../imgs/bandeira.png'
import pessoas from '../../imgs/pessoas2.jpg'
export default class Categoria extends Component {
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
                            <h2>Categorias</h2>
                        </HeadForm>
                        <div id="divTodos">
                            <div id="div1">
                                <div>
                                    <h3>Gênero:</h3>
                                    <h3>Homens e Mulheres</h3>
                                </div>
                                <div>
                                    <h3>Idade::</h3>
                                    <h3>A partir dos 10 anos</h3>
                                </div>
                                <div>
                                    <h3>Nível de dificuldade:</h3>
                                    <h3>(N)Iniciante</h3>
                                    <h3>(B) Intermediário</h3>
                                    <h3>(A) Avançado</h3>
                                    <h3>(E)Elite</h3>
                                </div>
                            </div>
                            <div id="div2">
                                <img src={pessoas}></img>
                                <h3>Exemplo: Um novato de 29 anos - H adulto N</h3>
                            </div>
                        </div>

                    </Form>
                    
                </Content>
            </>
        );
    }
}
