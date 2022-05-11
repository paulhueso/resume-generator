
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
                withCredentials: true
            })
            .then(res => resolve(res))
            .catch(err => alert(`Cannot log in : ${err}`));
        });
    }

    static async register(mailInput, passwordInput, nameInput, firstnameInput){
        return new Promise(function(resolve){
            let data = {mail: mailInput, lastname: nameInput, firstname: firstnameInput, password: passwordInput};
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

    static async saveResumeBDD(resume, id){
        return new Promise(function(resolve){
            axios.get(`http://localhost:3000/api/cvs/save`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async saveResumeSession(resume, id){
        return new Promise(function(resolve){
            axios.patch(`http://localhost:3000/api/cv/${id}`, resume, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }
    
    static async logout(){
        return new Promise(function(resolve){
					axios.get("http://localhost:3000/api/logout", {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json;charset=UTF-8",
                        },
                        withCredentials: true 
                    })
					.then(res => resolve(res))
                    .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async fetchCVs(){
        return new Promise(function(resolve) {
            axios.get("http://localhost:3000/api/cvs", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(cvs => resolve(cvs))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async createCV(titleCV){
        return new Promise(function(resolve){
            let data = {title: titleCV};
            axios.get("http://localhost:3000/api/user/cv", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 

            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async edit_profile(mailInput, passwordInput, nameInput, firstnameInput, address, tel){
        return new Promise(function(resolve){
            let data = {mail: mailInput, lastname: nameInput, firstname: firstnameInput, password: passwordInput, address: address, phone: tel};
            axios.patch("http://localhost:3000/api/user/update", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                  withCredentials: true
            })
            .then(res => resolve(res))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }
    
 
    static async fetchCVById(id){
        return new Promise(function(resolve) {
            axios.get(`http://localhost:3000/api/cv/${id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => resolve(res.data))
            .catch(err => console.log(`Cannot reach server : ${err}`));
        });
    }

    static async fetchUserInfos() {
        return new Promise(function(resolve) {
            axios.get('http://localhost:3000/api/user/', {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => console.log(`Cannot reach server : ${err}`));;
        });
    }
}