
const axios = require('axios').default;

module.exports = class Api{

    static async login(mailInput, passwordInput){
        return new Promise(function(resolve){
            let data = {mail: mailInput, password: passwordInput};
            axios.post("http://localhost:3000/api/login", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot log in : ${err}`));
        });
    }
}