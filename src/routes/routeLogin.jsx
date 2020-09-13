import React, { Component } from 'react';

import { get_form, is_empty } from '../utils/formfast';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';

import srv from '../service/service';
import { FMLOGIN, FMWHOIAM } from '../service/providers';
import Carregamento from '../components/carregamento/carregamento';


class RouteLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carregar: false
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ carregar: true });

        // const request = get_form(event.target);

        // if (is_empty(request.usuario) || is_empty(request.senha)) {
        //     this.toast.show({ severity: 'error', summary: 'Autenticação', detail: 'Preencha o usuário e senha!' });
        //     this.setState({ carregar: false });
        //     return;
        // }

        // const resposta = await srv.postChamada(FMLOGIN, request);
        // this.toast.show({ severity: resposta.falha ? 'error' : 'success', summary: 'Autenticação', detail: resposta.mensagem });


        // if (!resposta.falha) {
        //     localStorage.setItem('expires', resposta.registros[1]); 
        //     localStorage.setItem('session', resposta.registros[0]);

        //     this.props.history.push('/dashboard');
        // }

        this.props.history.push('/dashboard');
        
        this.setState({ carregar: false });
    }

    render() {
        return (
            <>
                {
                    this.state.carregar ? (<ProgressBar mode="indeterminate" style={{ height: '5px' }} />) : ''
                }

                <div className="p-pt-5">

                    <Panel header="Sign In" style={{ width: '350px' }} className="p-m-auto">
                        <h2 className="p-m-0 p-text-center"> Bem-Vindo! </h2>
                        <p className="p-m-0 p-text-center"> Sistema de tarefas </p>

                        {
                            this.state.carregar ? (
                                <Carregamento w="316px" h="141px"></Carregamento>
                            ) : (
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="p-my-3"></div>
                                        <div className="p-inputgroup p-mb-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="fas fa-user"></i>
                                            </span>
                                            <InputText placeholder="Digite seu usuário." disabled={this.state.carregar} name="usuario" required />
                                        </div>

                                        <div className="p-inputgroup">
                                            <span className="p-inputgroup-addon">
                                                <i className="fas fa-key"></i>
                                            </span>
                                            <InputText placeholder="Digite sua senha." disabled={this.state.carregar} name="senha" type="password" required />
                                        </div>


                                        <div className="p-d-flex p-py-2">
                                            <Button label="Cadastrar" type="button" disabled={this.state.carregar} style={{ width: '50%' }} className="p-button-secondary p-button-text p-w-50 p-mr-1" />
                                            <Button label="Entrar" type="submit" disabled={this.state.carregar} style={{ width: '50%' }} className="p-w-50" />
                                        </div>
                                    </form>
                                )
                        }




                    </Panel>
                </div>
                <Toast ref={(el) => this.toast = el} />
            </>
        );
    }
}

export default RouteLogin;