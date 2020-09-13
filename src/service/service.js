
import axios from 'axios';

export default {

    MEU_SERVIDOR: 'http://localhost:5000/api/',

    ALPACA_SERVIDOR: 'https://paper-api.alpaca.markets',
    ALPACA_API_KEY: 'PKDY8S4ZYD1QMPODND3X',
    APLACA_SECRET_API_KEY: 'EfEKH5Bu1XbB1LyTGUC0zc0hG/rG5AdF/2koVmb5',    

    postChamada: async function(servico = '', request = {}, serverId = 0) {
        const serverURL = serverId === 0 ? this.MEU_SERVIDOR : this.ALPACA_SERVIDOR;
        var config = {};

        if(serverId === 0) {
            const token = 'Bearer ' + (localStorage.getItem('session') || 'nodef');
            config = { Authorization: token };
        } else {
            config = {
                "APCA-API-KEY-ID": this.ALPACA_API_KEY,
                "APCA-API-SECRET-KEY": this.APLACA_SECRET_API_KEY
            };
        }        
        const resposta = await axios.post(serverURL + servico, request, { headers: config }); 
        return resposta.data;
    },


    getChamada: async function(servico = '', request = {}, serverId = 0) {

        var config = {};

        if(serverId === 0) {
            const token = 'Bearer ' + (localStorage.getItem('session') || 'nodef');
            config = { Authorization: token };
        } else {
            config = {
                "APCA-API-KEY-ID": this.ALPACA_API_KEY,
                "APCA-API-SECRET-KEY": this.APLACA_SECRET_API_KEY
            };
        }

        const serverURL = serverId === 0 ? this.MEU_SERVIDOR : this.ALPACA_SERVIDOR;

        const resposta = await axios.get(serverURL + servico,  { headers: config }); 
        return resposta.data;
    }

}