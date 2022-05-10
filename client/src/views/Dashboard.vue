<template>
<div>
<header>
	<Navbar id="navbar"/>
</header> 
<b-card-group deck>

<b-card v-for="exp in user.cv_list" :key="exp.titre" :title="exp.titre" class="card" >
  
		<button type="button" class="btn btn-primary" @click="$router.push({ name: 'Home', params: {id:exp._Id} })">Modifier CV</button>
		<button type="button" class="btn btn-danger">Supprimer Cv</button>
    
  </b-card>
<b-card title="Créer un nouveau Cv" class="card">
	<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button type="button" class="btn btn-warning">Créer un nouveau Cv</button>
  </div>
  <input type="text" class="form-control" placeholder="Titre du Cv" aria-label="" aria-describedby="basic-addon1">
</div>
		
	
</b-card>
 </b-card-group>
	</div>
</template>


<script>
import Navbar from '/src/components/Navbar.vue'
import json from "/src/json/test.json";
const axios = require('axios').default;
export default {

	components: {
		Navbar,
 },
	
	data() {
    return {
      user: json, //a supp
			user_2: axios.get("http://localhost:3000/api/cvs")
    };
  }
}

</script>

<style scoped>
#navbar {
  top: 0%
}
.card{
	margin-top:2%;
	margin-bottom: 1%;
	
	
}
</style>