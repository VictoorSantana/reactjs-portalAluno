import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

import { Sidebar } from 'primereact/sidebar';
import { PanelMenu } from 'primereact/panelmenu';
import { InputText } from 'primereact/inputtext';
import { ProgressBar } from 'primereact/progressbar';

import srv from '../../service/service';
import { FMWHOIAM } from '../../service/providers';

import Rotas from '../../utils/routes';

import { updateUser } from '../../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { is_null } from '../../utils/formfast';

import './style.css';

class FullMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            nome: 'Igor',
            email: 'igor@email.com',
            imagem: ''
        };
    }


    componentDidMount = async () => {
        /*
        if (is_null(this.props.user)) {
            const resposta = await srv.getChamada(FMWHOIAM, {});
            if (resposta.falha) {
                this.handleSair();
            } else {
                this.props.onUpdateUser(resposta.registros[0]);
            }
        }
        */
    }


    handleSair = () => {
        window.location = "/" ;
        /*
        localStorage.removeItem('session');
        window.location.reload();
        */
    }

    render() {
        const leftContents = (
            <>
                <Button label="Portal do aluno" icon="fas fa-bars" onClick={(e) => this.setState({ visible: true })} />
            </>
        );

        const rightContents = (
            <>
                <Button icon="fas fa-cogs" className="p-mr-1" />
                <Button icon="fas fa-sign-out-alt" onClick={() => this.handleSair()} />
            </>
        );

        return (
            <>
                <Toolbar left={leftContents} right={rightContents} style={{ padding: '0.5rem', backgroundColor: '#2196F3', border: 'none', borderRadius: '0' }} />

                <Sidebar visible={this.state.visible} className="shadow" showCloseIcon={true} onHide={() => this.setState({ visible: false })} style={{ backgroundColor: '#f8f9fa', padding: 0 }}>
                    <div className="p-d-flex p-mb-2 p-px-3">
                        <img src="/user_exemplo.png" style={{ borderRadius: '3px', width: '65px', height: '65px' }} alt="imagem usuario" />
                        <div className="p-ml-1">
                            <h4> Igor Marques </h4>
                            <p> igor@email.com </p>
                        </div>
                    </div>
                    <div className="p-inputgroup p-mb-5 p-px-3">
                        <span className="p-inputgroup-addon">
                            <i className="fas fa-search"></i>
                        </span>
                        {/*  Auto Complete field  */}
                        <InputText placeholder="Procurar" />
                    </div>
                    <PanelMenu model={Rotas} style={{ width: '100%' }} />
                </Sidebar>
                {
                    this.props.load ? (
                        <ProgressBar mode="indeterminate" style={{ height: '5px' }} />
                    ): ('')
                }                

                <div className="fm-content">
                    {this.props.children}
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapActionToProps = (dispatch) => {
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch);
};

export default connect(mapStateToProps, mapActionToProps)(FullMenu);