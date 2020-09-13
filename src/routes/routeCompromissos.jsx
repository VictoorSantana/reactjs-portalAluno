import React, { Component } from 'react';
import FullMenu from '../components/fullMenu/fullMenu';
import { FullCalendar } from 'primereact/fullcalendar';
import { Card } from 'primereact/card';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

class RouteCompromissos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [
                {id: '1', title: 'Prova matemática', start: '2020-09-18T07:30:00' },
                {id: '2', title: 'Exercicio quimíca', start: '2020-09-24T07:30:00' },
                {id: '3', title: 'EAD', start: '2020-09-06T07:30:00' }
                
            ],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2020-09-01',
                header: {
                    left: 'anterior,prox',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };
        //this.eventService = new EventService();
    }

    componentDidMount() {
        //this.eventService.getEvents().then(data => this.setState({ events: data }));
    }

    render() {
        return (
            <>
                <FullMenu>

                    <Card>
                        <FullCalendar events={this.state.events} options={this.state.options} />
                    </Card>


                </FullMenu>
            </>
        );
    }
}

export default RouteCompromissos;