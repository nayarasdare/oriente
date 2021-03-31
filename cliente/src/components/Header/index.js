import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaSignOutAlt} from 'react-icons/fa';
import { Container, Content, Profile} from './styles';
import logo from '../../imgs/ll.png'

export default class Header extends Component{
    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        window.location.href = '/login';
    }
    render(){
        const id = localStorage.getItem('id');
        const user = localStorage.getItem('user');
        return (
            <Container >
                <Content>
                    <nav>
                        <Link  to="/">
                           <img src={logo} ></img>
                        </Link>
                    </nav>

                    <aside>
                        <Link to="/cadastrar">
                            <h3>Cadastro</h3>
                        </Link>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                        <Link  to="/categoria">
                            <h3>Categoria</h3>
                        </Link>
                        <Link  to="/uniformAndEquip">
                            <h3>Uniformes e Equipamentos</h3>
                        </Link>
                        <Link to="/map">
                            <h3>Mapa e Simbologia</h3>
                        </Link>
                        <Link to="/busca">
                            <h3 >Busca</h3>
                            <input name="username" type="text" placeholder="Nome" required/>
                        </Link>
                        <Profile>
                            {id > 0 &&
                                <div>
                                    <strong>{user}</strong>
                                    <button type = "button" onClick={this.logout}>
                                        <FaSignOutAlt/>
                                    </button>
                                </div>
                            }
                        </Profile>
                    </aside>
                </Content>
            </Container>
        );
    }
}
