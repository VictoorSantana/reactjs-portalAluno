import React, { Component } from 'react';
import FullMenu from '../components/fullMenu/fullMenu';
import { Card } from 'primereact/card';
import srv from '../service/service';
import { PROVIDER_TRADEACCOUNT } from '../service/providers';
import { Toast } from 'primereact/toast';

class RouteTradeConta extends Component {


    constructor(props) {
        super(props);
        this.state = {
            accountData: {}
        }
    }


    componentDidMount = async () => {
        
        //const response = await srv.getChamada(PROVIDER_TRADEACCOUNT, {}, 1);
        //console.log(response);


        const response = {
            "id": "f8c354cf-8d38-45d0-ab8c-bbd9f8a33975",
            "account_number": "PA2K8KB0QYMY",
            "status": "ACTIVE",
            "currency": "USD",
            "buying_power": "400000",
            "regt_buying_power": "200000",
            "daytrading_buying_power": "400000",
            "cash": "100000",
            "portfolio_value": "100000",
            "pattern_day_trader": false,
            "trading_blocked": false,
            "transfers_blocked": false,
            "account_blocked": false,
            "created_at": "2020-08-30T20:39:10.150015Z",
            "trade_suspended_by_user": false,
            "multiplier": "4",
            "shorting_enabled": true,
            "equity": "100000",
            "last_equity": "100000",
            "long_market_value": "0",
            "short_market_value": "0",
            "initial_margin": "0",
            "maintenance_margin": "0",
            "last_maintenance_margin": "0",
            "sma": "0",
            "daytrade_count": 0
        };

        this.setState({ accountData: response });



    }
    

    render() {
        return (
            <>
                <FullMenu  load={false}>

                    <Card>
                        <div className="p-d-flex p-jc-between">
                            <p> Status: </p>
                            <p> { this.state.accountData.status } </p>
                        </div>                        
                    </Card>

                    <Card className="p-mt-2">
                        <div className="p-d-flex p-jc-between">
                            <p> Moeda: </p>
                            <p> { this.state.accountData.currency } </p>
                        </div>                        
                    </Card>


                    <Card className="p-mt-2">
                        <div className="p-d-flex p-jc-between">
                            <p> Dinheiro: </p>

                            <span className="p-tag p-tag-success">{ this.state.accountData.cash } $</span>                            
                        </div>                        
                    </Card>

                </FullMenu>
                <Toast ref={(el) => this.toast = el} />                
            </>
        );
    }
}

export default RouteTradeConta;         