import React, { Component } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

class Carregamento extends Component {
    render() {
        return (
            <div className="p-d-flex p-jc-center p-ai-center" style={{width: this.props.w || '60px', height: this.props.h || '60px' }}>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" animationDuration=".5s"/>
            </div>
        );
    }
}

export default Carregamento;