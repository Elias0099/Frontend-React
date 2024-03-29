import * as React from 'react';

export default class WelcomeContent extends React.Component {

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Bienvenido</h1>
                        <p className="lead">Inicia sesión para ver contenido protegido.</p>
                    </div>
                </div>
            </div>
        );
    };
}
