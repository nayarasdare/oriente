import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';
import { Content, Form, Footer,DivLogos,HeadForm } from './styles';
import cbo from '../../imgs/cbo.png'
import bandeira from '../../imgs/bandeira.png'
export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            date:'',
            loading: false,

        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('dtnasc',this.state.date);
        data.append('sexo',"Masculino");
        data.append('participacoes',1);
        
        try {
            await api.post(`/users/create/`, data);
            toast.success('Usuário inserido com sucesso');
            this.setState({ loading: false });
            this.props.history.push('/login');
        } catch (error) {
            toast.error('Falha ao inserir usuário');
            this.setState({ loading: false });
        }
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
                            <h2>Cadastre-se aqui</h2>
                        </HeadForm>
                        <input name="username" type="text" placeholder="Nome" required
                            onChange={this.handleChange} value={this.state.username} />
                        <input name="email" type="email" placeholder="E-mail" required
                            onChange={this.handleChange} value={this.state.email} />
                        <input name="date" type="date" placeholder="Data de Nascimento" required
                            onChange={this.handleChange} value={this.state.date} />
                        <input name="password" type="password" placeholder="Senha" required
                            onChange={this.handleChange} value={this.state.password} />
                        <input name="cpassword" type="password" placeholder="Confirmar Senha" required
                            onChange={this.handleChange} value={this.state.cpassword} />
                        <button type="submit"> {loading ? 'Carregando...' : 'Cadastrar'}</button>
                    </Form>
                </Content>
            </>
        );
    }
}
