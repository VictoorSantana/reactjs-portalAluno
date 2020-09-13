import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Panel } from 'primereact/panel';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';


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

class RouteAtividades extends Component {


    constructor(props) {
        super(props);

        this.state = {
            turmaEscolhida: '',
            bimestreEscolhido: '',

            dialogDetalhes: false,
        }
    }


    onBasicUpload() {
        this.toast.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
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


                    <Card className="p-mt-2">

                        <div className="p-grid">
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <Panel header="Trabalho entregue" style={{ position: 'relative' }}>

                                    <Button
                                        icon="fas fa-arrow-right"
                                        className="p-button-rounded p-button-text"
                                        style={{ position: 'absolute', right: '6px', top: '6px' }}
                                        onClick={() => this.setState({ dialogDetalhes: true })} />

                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Código:</p>
                                        <p className="p-text-light">3199</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Disponível até:</p>
                                        <p className="p-text-light">19/08/2020 às 23:12</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Assunto:</p>
                                        <p className="p-text-light">Trabalho dos alunos ...</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Data entrega:</p>
                                        <p className="p-text-light">31/08/2020</p>
                                    </div>
                                </Panel>

                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <Panel header="Trabalho disponível" className="panel-header-sucess" style={{ position: 'relative' }}>

                                    <Button
                                        icon="fas fa-arrow-right"
                                        className="p-button-rounded"
                                        style={{ position: 'absolute', right: '6px', top: '6px' }}
                                        onClick={() => this.setState({ dialogDetalhes: true })} />




                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Código:</p>
                                        <p className="p-text-light">3199</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Disponível até:</p>
                                        <p className="p-text-light">19/08/2020 às 23:12</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Assunto:</p>
                                        <p className="p-text-light">Trabalho dos alunos ...</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Data entrega:</p>
                                        <p className="p-text-light">-/-/-</p>
                                    </div>
                                </Panel>

                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <Panel header="Trabalho entregue" style={{ position: 'relative' }}>

                                    <Button
                                        icon="fas fa-arrow-right"
                                        className="p-button-rounded p-button-text"
                                        style={{ position: 'absolute', right: '6px', top: '6px' }}
                                        onClick={() => this.setState({ dialogDetalhes: true })} />

                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Código:</p>
                                        <p className="p-text-light">3199</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Disponível até:</p>
                                        <p className="p-text-light">19/08/2020 às 23:12</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Assunto:</p>
                                        <p className="p-text-light">Trabalho dos alunos ...</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Data entrega:</p>
                                        <p className="p-text-light">31/08/2020</p>
                                    </div>
                                </Panel>

                            </div>
                            <div className="p-col-12 p-md-6 p-lg-3">
                                <Panel header="Trabalho disponível" className="panel-header-sucess" style={{ position: 'relative' }}>

                                    <Button
                                        icon="fas fa-arrow-right"
                                        className="p-button-rounded"
                                        style={{ position: 'absolute', right: '6px', top: '6px' }}
                                        onClick={() => this.setState({ dialogDetalhes: true })} />




                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Código:</p>
                                        <p className="p-text-light">3199</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Disponível até:</p>
                                        <p className="p-text-light">19/08/2020 às 23:12</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Assunto:</p>
                                        <p className="p-text-light">Trabalho dos alunos ...</p>
                                    </div>
                                    <div className="p-d-flex p-jc-between">
                                        <p className="p-text-bold">Data entrega:</p>
                                        <p className="p-text-light">-/-/-</p>
                                    </div>
                                </Panel>

                            </div>
                        </div>



                    </Card>



                    <Dialog header="Detalhes da atividade" visible={this.state.dialogDetalhes} style={{ width: '50vw' }} onHide={() => this.setState({ dialogDetalhes: false })}>

                        <div>
                            <p className="p-text-bold">Assunto:</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="p-d-flex p-jc-center p-mt-5 ">
                            <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />
                        </div>

                    </Dialog>
                </FullMenu>
            </>
        );
    }
}

export default RouteAtividades;