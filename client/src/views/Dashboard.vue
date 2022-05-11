<template>
<div>
<header>
	<Navbar id="navbar"/>
</header> 
<b-card-group deck>

<b-card v-for="exp in CVS.cv_list" :key="exp.titre" :title="exp.titre" class="card" >
  
		<button type="button" class="btn btn-primary" @click="$router.push({ name: 'Home', params: {id:exp._Id} })">Modifier CV</button>
		<button type="button" class="btn btn-danger">Supprimer Cv</button>
    
  </b-card>
<b-card title="Créer un nouveau Cv" class="card">
	<div class="input-group mb-3">
  <div class="input-group-prepend">
    <button type="button" @click="createNewCV(TitreInput)" class="btn btn-warning">Créer un nouveau Cv</button>
  </div>
  <input type="text" class="form-control" placeholder="Titre du Cv" aria-label="" aria-describedby="basic-addon1" v-model="TitreInput">
</div>
		
	
</b-card>
 </b-card-group>
	</div>
</template>


<script>
import Navbar from '/src/components/Navbar.vue'
import json from "/src/json/test.json";
const Api = require("../api/user.routes");
export default {

	components: {
		Navbar,
 },
	
	data() {
    return {
		CVS:{} , //a supp
		//CVS:json,
		
    };
  },
	methods: {
    createNewCV(titre) {
		this.CVS.cv_list.push({
			titre: titre,
			});
		Api.NewCV(titre);
	},
},
	mounted(){
    Api.List_CV().then(CVS => this.CVS= CVS)
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