import * as React from 'react';


import { request, setAuthHeader } from '../Helpers/axios_helper';

import Buttons from './Buttons';
import AuthContent from './AuthContent';
import LoginForm from './LoginForm';
import WelcomeContent from './WelcomeContent'

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };

    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, nombre, apellido, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                nombre: nombre,
                apellido: apellido,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    render() {
        return (
            <>
                <Buttons
                    login={this.login}
                    logout={this.logout}
                />

                {this.state.componentToShow === "welcome" && <WelcomeContent /> }
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} />}
                {this.state.componentToShow === "messages" && <AuthContent />}

            </>
        );
    };
}
