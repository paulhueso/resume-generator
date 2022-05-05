<template>
<head>
  <meta charset="UTF-8">
  <title>Register Form</title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Rubik:400,700'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="register-form">
  <form>
    <h1>Inscription</h1>
    <div class="content">
      <div class="input-field">
        <input type="identifier" placeholder="Identifiant" autocomplete="nope">
      </div>
      <div class="input-field">
        <input type="mail" placeholder="Email" autocomplete="nope">
      </div>
      <div class="input-field">
        <input type="nom" placeholder="Nom" autocomplete="Nom">
      </div>
      <div class="input-field">
        <input type="prénom" placeholder="Prénom" autocomplete="Prénom">
      </div>
      <div class="input-field">
        <input type="password" placeholder="Mot de passe" autocomplete="new-password">
      </div>
    </div>
    <div class="action">
      <button @click="goToConnection()">S'inscrire'</button>
      <button @click="goToConnection()">Se connecter</button>
    </div>
  </form>
</div>
<!-- partial -->


</body>
</template>
<script>



export default {
  name: 'Connection',
  methods: {
    goToConnection: function () {
      this.$router.push({ name: 'Login'})
    },
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

body {
  background: #131313;
  font-family: 'Rubik', sans-serif;
}

.register-form {
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
.register-form h1 {
  padding: 35px 35px 0 35px;
  font-weight: 300;
}
.register-form .content {
  padding: 35px;
  text-align: center;
}
.register-form .input-field {
  padding: 12px 5px;
}
.register-form .input-field input {
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
.register-form .input-field input::-webkit-input-placeholder {
  text-transform: uppercase;
}
.register-form .input-field input::-moz-placeholder {
  text-transform: uppercase;
}
.register-form .input-field input:-ms-input-placeholder {
  text-transform: uppercase;
}
.register-form .input-field input::-ms-input-placeholder {
  text-transform: uppercase;
}
.register-form .input-field input::placeholder {
  text-transform: uppercase;
}
.register-form .input-field input:focus {
  border-color: #222;
}
.register-form a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  display: inline-block;
  margin-top: 20px;
}
.register-form .action {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
}
.register-form .action button {
  width: 100%;
  border: none;
  padding: 18px;
  font-family: 'Rubik', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  background: #e8e9ec;
  color: #777;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0;
  letter-spacing: 0.2px;
  outline: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.register-form .action button:hover {
  background: #d8d8d8;
}
.register-form .action button:nth-child(2) {
  background: #2d3b55;
  color: #fff;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 4px;
}
.register-form .action button:nth-child(2):hover {
  background: #3c4d6d;
}
</style>