import React from 'react';
import Header from '../../components/Login/Header/index';
import Footer from '../../components/Login/Footer/index';
import { Main, Logo, Title, Form } from './styles';

import logo from '../../assets/images/linkedin-logo-vector.png';

import InputPassword from '../../components/Login/InputPassword/index';

export default function Login() {
    return (
        <>
            <Header />
            <Main>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <Title>
                    <h1>Welcome Back</h1>
                    <p>
                        Don't miss your next opportunity. Sign in to stay
                        updated on your professional world.
                    </p>
                </Title>
                <Form>
                    <input type="text" placeholder="Usename" />
                    <InputPassword />
                </Form>
            </Main>
            <Footer />
        </>
    );
}
