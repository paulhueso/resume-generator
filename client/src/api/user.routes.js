
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
            .catch(err => alert(`Cannot log in : ${err}`));
        });
    }

    static async register(mailInput, passwordInput, nameInput, firstnameInput){
        return new Promise(function(resolve){
            let data = {mail: mailInput, name: nameInput, firstname: firstnameInput, password: passwordInput};
            axios.post("http://localhost:3000/api/register", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async saveResume(resume, id){
        return new Promise(function(resolve){
            axios.patch(`http://localhost:3000/api/cv/${id}`, resume, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async fetchResume(id){
        return new Promise(function(resolve) {
            axios.get(`http://localhost/api/cv/${id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(resume => resolve(resume))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }
}