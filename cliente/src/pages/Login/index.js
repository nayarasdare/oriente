import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';
import { Content, Form, Footer,DivLogos,HeadForm } from './styles';
import cbo from '../../imgs/cbo.png'
import bandeira from '../../imgs/bandeira.png'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,

        };
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        try {
            const response = await api.post('/users/auth/', data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', 10);
            this.setState({ loading: false });
            this.props.history.push('/');
        } catch (error) {
            toast.error('E-mail ou senha incorretos');
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
                            <h2>Login</h2>
                        </HeadForm>
                        <input name="email" type="email" placeholder="E-mail" required
                            onChange={this.handleChange} value={this.state.email} />
                        <input name="password" type="password" placeholder="Senha" required
                            onChange={this.handleChange} value={this.state.password} />

                        <button type="submit"> {loading ? 'Carregando...' : 'Entrar'}</button>
                    </Form>
                </Content>
            </>
        );
    }
}