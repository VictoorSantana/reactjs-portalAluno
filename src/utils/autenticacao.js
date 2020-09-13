

export default { 
 
    verificar: () => {        


        return true; //depois tira

        const token = localStorage.getItem('session');   

        let isAuth = false;
        if (token !== null && token !== undefined) {
            if(token.trim().length > 0) {
                isAuth = true;
            } else {
                isAuth = false;
            }
        }

        return isAuth;
        
    },

    // acessoValido: async () => {
    //     const acesso = await ServiceLogin.acessoValido();
    //     return acesso;
    // }
}