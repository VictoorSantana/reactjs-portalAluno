import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';

import React, { Component } from 'react';
import FullMenu from '../components/fullMenu/fullMenu';




const turmas = [
    { label: '8º Serie', value: '8s' },
];

const bimestre = [
    { label: '1 bimestre', value: '1bi' },
    { label: '2 bimestre', value: '2bi' },
    { label: '3 bimestre', value: '3bi' },
];


class RouteNota extends Component {

    constructor(props) {
        super(props);

        this.state = {
            turmaEscolhida: '',
            bimestreEscolhido: '',
            dialogExtratos: false,


            data: [
                {
                    id: 0,
                    nome: 'Igão',
                    materia: 'Matemática',
                    nota: '8.0',
                    presenca: '80%',
                },
                {
                    id: 0,
                    nome: 'Igão',
                    materia: 'Português',
                    nota: '7.5',
                    presenca: '95%',
                }
            ]
        }
    }


    renderBtnExtrato() {
        return (
            <Button icon="pi pi-file" className="p-button-rounded" />

        );
    }


    renderBtnFaltas() {
        return (
            <Button icon="pi pi-calendar" className="p-button-rounded" />
        );
    }

    


    render() {
        return (
            <>
                <FullMenu>

                    <Card className="p-mt-1">

                        <div className="p-d-flex p-ai-end">
                            <div className="p-field p-mr-1">
                                <label htmlFor="fieldId" className="p-d-block">Turma</label>
                                <Dropdown value={this.state.turmaEscolhida} style={{ width: '197px' }} options={turmas} onChange={(e) => { this.setState({ turmaEscolhida: e.value }) }} placeholder="Selecione sua turma" />
                            </div>

                            <div className="p-field p-mr-1">
                                <label htmlFor="fieldId" className="p-d-block">Bimestre</label>
                                <Dropdown value={this.state.bimestreEscolhido} style={{ width: '197px' }} options={bimestre} onChange={(e) => { this.setState({ bimestreEscolhido: e.value }) }} placeholder="Selecione o bimestre" />
                            </div>


                            <div className="p-field">
                                <Button icon="pi pi-search" className="p-button-rounded" />
                            </div>
                        </div>



                    </Card>

                    <Card className="p-mt-1">
                        <DataTable value={this.state.data}>
                            <Column field="nome" header="Aluno"></Column>
                            <Column field="materia" header="Matéria"></Column>
                            <Column field="nota" header="Nota"></Column>
                            <Column field="presenca" header="Presença"></Column>

                            <Column body={this.renderBtnExtrato} headerStyle={{ width: '4em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />
                            <Column body={this.renderBtnFaltas} headerStyle={{ width: '4em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />
                        </DataTable>
                    </Card>
                </FullMenu>


                <Dialog header="Header" visible={this.state.dialogExtratos} style={{ width: '50vw' }}  onHide={() => this.setState({dialogExtratos: false})}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Dialog>

                {/*  id: 0,
                    nome: 'Igão',
                    materia: 'Matemática',
                    nota: '8.0',
                    presenca: '80%',   */}

            </>
        );
    }
}

export default RouteNota;