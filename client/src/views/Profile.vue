<template>
<div>
<head>
  <meta charset="UTF-8">
  <title>Profile form</title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'><link rel="stylesheet" href="./style.css">

</head>

  

  
<body>
<!-- partial:index.partial.html -->
<div class="profile-form">
<h1 class = "accueilclasse"> Sea V generator: do it whale</h1>
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F559809%2Fscreenshots%2F1672971%2Fwhale_logo.jpg&f=1&nofb=1" width="200" height="150" class = "logo">
  <form>
    <h1>Mon profile</h1>
    <div class="content">
      <div class="input-field">
        <input type="email" placeholder="mail" v-model="mailInput">
      </div>
      <div class="input-field">
        <input type="text" placeholder="Nom" v-model="nameInput">
      </div>
      <div class="input-field">
        <input type="text" placeholder="Prénom" v-model="firstnameInput">
      </div>
      <div class="input-field">
        <input type="text" placeholder="Address"  v-model="address">
      </div>
      <div class="input-field">
        <input type="tel" placeholder="Tel" pattern="[0][0-9]{9}" v-model="tel">
      </div>
       <div class="input-field">
        <input type="password" placeholder="Nouveau Mot de passe" autocomplete="new-password" v-model="passwordInput">
      </div>
    </div>
    <div class="action">
      <button @click="profileUser(mailInput, passwordInput, nameInput, firstnameInput, address, tel)">Sauvegarder</button>
      <button @click="Annuler()">Annuler</button>
    </div>
  </form>
  </div>
  
  </body>
</div>
</template>

<script>


const Api = require("../api/user.routes");
export default {
     
	data() {
		return {
			user:{},
			tel:"",
			address:"",
			firstnameInput:"",
			nameInput:"",
			mailInput:"",
			passwordInput: ''
		};
	},


	methods: {

		Annuler: function () {
			this.$router.push({ name: 'Dashboard'})
		},

		profileUser: async function (mailInput, passwordInput, nameInput, firstnameInput,address,tel) {
			Api.edit_profile(mailInput, passwordInput, nameInput, firstnameInput, address, tel)
			.then(res => {
				if(res.status == 200) {
					this.$router.push({ name: 'Dashboard'})
					this.$toast.open({
						message: "Profile updated !",
						type: "success",
						duration: 5000,
						dismissible: true
					});;
				} else if(res.status == 401){
					this.$toast.open({
						message: "Error, Unauthorized",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				} else {
					this.$toast.open({
						message: "Error, Error while updating",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				}
			});
		},
	},

	mounted(){
		Api.getUser()
		.then(res => {
			console.log(res);
			if(res.status == 401) {
				this.$router.push({ name: 'Login'});
			} else if(res.status == 401 ) {
				this.$toast.open({
					message: "Unauthorized",
					type: "error",
					duration: 5000,
					dismissible: true
				});
				this.$router.push({ name: 'Login'});
			} else if(res.status == 500 ){
				this.$toast.open({
					message: "Error, serveur !",
					type: "error",
					duration: 5000,
					dismissible: true
				});
			}
		});
		
		Api.fetchUserInfos().then(user => {
			this.user = user
			this.tel = user.tel;
			this.address = user.address;
			this.firstnameInput = user.firstname;
			this.nameInput = user.surname;
			this.mailInput = user.mail;
		});
	}
};


</script>

<style scoped>
#navbar {
	top: 0%
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}

body {
	background: #ADE8F4;
	font-family: 'Rubik', sans-serif;
}

.profile-form {
	background: #fff;
	width: 750px;
	margin: 130px auto;
	display: -webkit-box;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.profile-form h1 {
	padding: 35px 35px 0 35px;
	font-weight: 300;
	text-align: center;
}
.profile-form .content {
	padding: 35px;
	text-align: center;
}
.profile-form .input-field {
	padding: 12px 5px;
}
.profile-form .input-field input {
	font-size: 16px;
	display: block;
	font-family: 'Rubik', sans-serif;
	width: 100%;
	padding: 10px 1px;
	border: 0;
	border-bottom: 1px solid #747474;
	outline: none;
	-webkit-transition: all .2s;
	transition: all .2s;
}
.profile-form .input-field input::-webkit-input-placeholder {
	text-transform: uppercase;
}
.profile-form .input-field input::-moz-placeholder {
	text-transform: uppercase;
}
.profile-form .input-field input:-ms-input-placeholder {
	text-transform: uppercase;
}
.profile-form .input-field input::-ms-input-placeholder {
	text-transform: uppercase;
}
.profile-form .input-field input::placeholder {
	text-transform: uppercase;
}
.profile-form .input-field input:focus {
	border-color: #222;
}
.profile-form a.link {
	text-decoration: none;
	color: #747474;
	letter-spacing: 0.2px;
	text-transform: uppercase;
	display: inline-block;
	margin-top: 20px;
}
.profile-form .action {
	display: -webkit-box;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-direction: row;
}
.profile-form .action button {
	width: 100%;
	border: none;
	padding: 18px;
	font-family: 'Rubik', sans-serif;
	cursor: pointer;
	text-transform: uppercase;
	background: #caf0f8;
	color: #03045e;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 0;
	letter-spacing: 0.2px;
	outline: 0;
	-webkit-transition: all .3s;
	transition: all .3s;
}
.profile-form .action button:hover {
	background: #d8d8d8;
}
.profile-form .action button:nth-child(2) {
	background: #03045e;
	color: #caf0f8;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 4px;
}
.profile-form .action button:nth-child(2):hover {
	background: #caf0f8;
	color: #03045e;
}
.logo{
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>