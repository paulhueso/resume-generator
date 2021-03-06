
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
            .catch(err => resolve(err.response));
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
            .catch(err => resolve(err.response));
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
            .catch(err => resolve(err.response));
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
            .catch(err => resolve(err.response));
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
            .catch(err => resolve(res.response));
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
            .catch(err => resolve(err.response));
        });
    }

    static async createCV(titleCV){
        return new Promise(function(resolve){
            let data = { title: titleCV };
            axios.post("http://localhost:3000/api/user/cv", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => resolve(res))
            .catch(err => resolve(err.response));
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
            .catch(err => resolve(res.response));
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
            .then(res => resolve(res.data))
            .catch(err => console.log(`Cannot reach server : ${err}`));;
        });
    }

    static async fetchCvStatus(id) {
        return new Promise(function(resolve) {
            axios.get(`http://localhost:3000/api/cv/status/${id}`, {
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

    static async fetchCvBeforeEdit(id) {
        return new Promise(function(resolve) {
            axios.get(`http://localhost:3000/api/cv/restore/${id}`, {
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

    static async deleteCV(id) {
        return new Promise(function(resolve) {
            axios.delete(`http://localhost:3000/api/user/cv/${id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                withCredentials: true 
            })
            .then(res => resolve(res))
            .catch(err => resolve(err.response));
        });
    }
    
    static async getUser(){
        return new Promise(function(resolve){
            axios.get("http://localhost:3000/api/user", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                  withCredentials: true
            })
            .then(res => resolve(res))
            .catch(err => resolve(err.response))
        });
    }
}