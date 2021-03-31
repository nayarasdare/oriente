import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Wrapper, Content } from './styles';
export default function AuthLayout({ children }) {
    return (
        <>
        <Header />
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
        <Footer/>
        </>
    );
}
AuthLayout.propTypes = {
    children: PropTypes.element.isRequired,
};