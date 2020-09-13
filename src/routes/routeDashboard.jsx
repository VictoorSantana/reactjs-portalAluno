import React, { Component } from 'react';
import FullMenu from '../components/fullMenu/fullMenu';

import { Chart } from 'primereact/chart';
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]
};

class RouteDashboard extends Component {

    constructor(props) {
        super(props);


        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };


        this.state = {
            listaChamada: [
                { ordem: 1, nome: 'Victor' },
                { ordem: 2, nome: 'Guilherme' },
                { ordem: 3, nome: 'Igor' }
            ],
            listaDisciplina: [
                { disciplina: 'Matemática' },
                { disciplina: 'Português' },
                { disciplina: 'Inglês' },
            ]
        }


        this.options = this.getLightTheme();


    }

    getLightTheme() {
        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };

        let stackedOptions = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            }
        };

        let multiAxisOptions = {
            responsive: true,
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    ticks: {
                        min: 0,
                        max: 100,
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        fontColor: '#495057'
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            }
        };

        return {
            basicOptions,
            stackedOptions,
            multiAxisOptions
        }
    }


    render() {


        const { basicOptions } = this.options;
        const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
        const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

        return (
            <>
                <FullMenu>


                    <Card className="p-mb-2">
                        <table>
                            <tbody>
                                <tr>
                                    <td> <p className="p-mb-3 p-mr-2 p-text-bold"> Ano letivo: </p> </td>
                                    <td> <p className="p-mb-3"> 2020 </p> </td>
                                </tr>
                                <tr>
                                    <td> <p className="p-mr-2 p-text-bold"> Orgão: </p> </td>
                                    <td> <p> Prefeitura Municípal de Apresentação </p> </td>
                                </tr>
                            </tbody>
                        </table>                        
                    </Card>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-lg-6">
                            <Panel header="Trabalhos entregues">
                                <Chart type="line" data={dataLine} />
                            </Panel>



                        </div>

                        <div className="p-col-12 p-md-6 p-lg-6">
                            <Panel header="Frequência de aulas">
                                <Chart type="bar" data={this.basicData} options={basicOptions} />
                            </Panel>
                        </div>

                        <div className="p-col-12 p-md-6 p-lg-6">
                            <Panel header="Lista de ordem chamada">
                                <DataTable value={this.state.listaChamada} paginator
                                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                                    currentPageReportTemplate="Mostrando {first} / {last} de {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                                    <Column field="ordem" header="Ordem"></Column>
                                    <Column field="nome" header="Nome"></Column>
                                </DataTable>
                            </Panel>
                        </div>


                        <div className="p-col-12 p-md-6 p-lg-6">
                            <Panel header="Disciplina mátriculada">
                                <DataTable value={this.state.listaDisciplina} paginator
                                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                                    currentPageReportTemplate="Mostrando {first} / {last} de {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
                                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                                    <Column field="disciplina" header="Discriplina"></Column>
                                </DataTable>
                            </Panel>
                        </div>


                    </div>

                </FullMenu>
            </>
        );
    }
}

export default RouteDashboard;