import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { TabView, TabPanel } from 'primereact/tabview';

import FullMenu from '../components/fullMenu/fullMenu';


import prov from '../service/providers';
import srv from '../service/service';
import Carregamento from '../components/carregamento/carregamento';

class RouteTarefas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tarefasData: [],
            tarefasQtRegistros: 0,
            tarefasPrimeiro: 0,
            tarefasCarregar: false,

            activeIndex: 0,
            listaDeResponsaveis: [],
            listaTiposDeTarefa: [],

            formTitulo: '',
            formDescricao: '',
            formResponsaveis: [],
            formTiposTarefa: [],


            carregandoCadastrar: false,
        }
    }


    carregarCombos = async () => {
        //console.log('CARREGAR COMBOS');

        const respostaResponsaveis = await srv.getChamada(prov.FMLISTAUSUARIOS, {});
        var _listaDeResponsaveis = [];

        for (var i = 0; i < respostaResponsaveis.registros.length; i++) {
            _listaDeResponsaveis.push({ label: respostaResponsaveis.registros[i].usuario, value: respostaResponsaveis.registros[i].usuario });
        }

        this.setState({ listaDeResponsaveis: _listaDeResponsaveis });


        const respostaTiposTarefa = await srv.getChamada(prov.FMLISTAPARAMETROS + 'tipo_tarefa', {});
        var _listaTiposDeTarefa = []

        for (var i = 0; i < respostaTiposTarefa.registros.length; i++) {
            _listaTiposDeTarefa.push({ label: respostaTiposTarefa.registros[i].descricao, value: respostaTiposTarefa.registros[i].valor });
        }

        this.setState({ listaTiposDeTarefa: _listaTiposDeTarefa });

    }


    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ carregandoCadastrar: true });
        const requestData = {
            titulo: this.state.formTitulo,
            descricao: this.state.formDescricao,
            quemCriou: "nodef",
            responsavel: this.state.formResponsaveis,
            dataCriacao: 0,
            tipo: this.state.formTiposTarefa,
            status: "nodef"
        };
        // console.log(requestData);
        const resposta = await srv.postChamada(prov.FMTAREFAS, requestData);
        // console.log('resposta', resposta);

        this.toast.show({ severity: resposta.falha ? 'error' : 'success', summary: 'Adicionar tarefa!', detail: resposta.mensagem });

        this.setState({ carregandoCadastrar: false });
    }

    handleTrocaAba = async (event) => {

        this.setState({ activeIndex: event.index });

        if (event.index === 1) {
            this.carregarCombos();
        }
    }


    componentDidMount = async () => {

        const resposta = await srv.getChamada(prov.FMTAREFAS, {});
        this.toast.show({ severity: resposta.falha ? 'error' : 'success', summary: 'Adicionar tarefa!', detail: resposta.mensagem });
        console.log(resposta.registros);
        this.setState({ tarefasData: resposta.registros });

    }


    handleTrocaPagina(event) {
        this.setState({ tarefasCarregar: true });

        //imitate delay of a backend call
        setTimeout(() => {
            const { first, rows } = event;

            this.setState({
                tarefasPrimeiro: first,
                tarefasData: this.datasource.slice(first, first + rows),
                tarefasCarregar: false
            });
        }, 500);
    }


    render() {

        return (
            <>

                <FullMenu load={this.state.carregandoCadastrar}>


                    <Card>
                        <TabView activeIndex={this.state.activeIndex} onTabChange={this.handleTrocaAba}>

                            <TabPanel header="Fila de tarefas">
                                <DataTable value={this.state.tarefasData} paginator rows={10} totalRecords={this.state.tarefasQtRegistros}
                                    lazy first={this.state.tarefasPrimeiro} onPage={this.handleTrocaPagina} loading={this.state.carregandoCadastrar}>
                                    <Column field="name" header="Name"></Column>
                                    <Column field="country.name" header="Country"></Column>
                                    <Column field="company" header="Company"></Column>
                                    <Column field="representative.name" header="Representative"></Column>
                                </DataTable>
                            </TabPanel>

                            <TabPanel header="Adicionar tarefa">
                                {
                                    !this.state.carregandoCadastrar ? (
                                        <div>
                                            <form onSubmit={this.handleSubmit} style={{ maxWidth: '450px' }}>

                                                <div className="p-fluid">
                                                    <div className="p-field">
                                                        <label htmlFor="titulo">Titulo</label>
                                                        <InputText name="titulo" value={this.state.formTitulo} onChange={(e) => { this.setState({ formTitulo: e.target.value }) }} />
                                                    </div>
                                                </div>

                                                <div className="p-fluid">
                                                    <div className="p-field">
                                                        <label htmlFor="descricao">Descrição</label>
                                                        <InputTextarea name="descricao" rows={5} cols={30} autoResize value={this.state.formDescricao} onChange={(e) => { this.setState({ formDescricao: e.target.value }) }} />
                                                    </div>
                                                </div>

                                                <div className="p-fluid">
                                                    <div className="p-field">
                                                        <label htmlFor="descricao">Responsável</label>

                                                        <Dropdown
                                                            value={this.state.formResponsaveis}
                                                            options={this.state.listaDeResponsaveis}
                                                            onChange={(e) => { this.setState({ formResponsaveis: e.value }) }}
                                                            optionLabel="label"
                                                            filter
                                                            showClear
                                                            filterBy="label"
                                                            placeholder="Selecione responsável" />

                                                    </div>
                                                </div>


                                                <div className="p-fluid">
                                                    <div className="p-field">
                                                        <label htmlFor="descricao">Tipo tarefa</label>

                                                        <Dropdown
                                                            value={this.state.formTiposTarefa}
                                                            options={this.state.listaTiposDeTarefa}
                                                            onChange={(e) => { this.setState({ formTiposTarefa: e.value }) }}
                                                            optionLabel="label"
                                                            filter
                                                            showClear
                                                            filterBy="label"
                                                            placeholder="Selecione o tipo da tarefa" />

                                                    </div>
                                                </div>

                                                <div className="p-py-1 p-text-right">
                                                    <Button label="Cadastrar" type="submit" disabled={this.state.carregandoCadastrar} className="p-w-50" />
                                                </div>

                                            </form>
                                        </div>
                                    ) : (
                                            <Carregamento h="471px" w="100%"></Carregamento>
                                        )
                                }




                            </TabPanel>
                        </TabView>
                    </Card>







                </FullMenu>

                <Toast ref={(el) => this.toast = el} />
            </>
        );
    }
}

export default RouteTarefas;