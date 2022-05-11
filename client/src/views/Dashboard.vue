<template>
<div>
<header>
	<Navbar id="navbar" />
</header> 
<b-card-group deck class="cards">
	<b-card v-for="cv in cvs" :key="cv.titre" :title="cv.titre" class="card" >
		<button type="button" class="btn btn-primary" @click="$router.push({ name: 'Home', params: {id:cv._id} })">Modifier CV</button>
		<button type="button" class="btn btn-danger">Supprimer CV</button>
	</b-card>
	<b-card title="Créer un nouveau CV" class="card">
		<div class="input-group mb-3">
		<div class="input-group-prepend">
			<button type="button" @click="createNewCV(titreInput)" class="btn btn-warning">Créer</button>
		</div>
		<input type="text" class="form-control" placeholder="Titre du CV" aria-label="" aria-describedby="basic-addon1" v-model="titreInput">
		</div>		
	</b-card>
 </b-card-group>
</div>
</template>


<script>
import Navbar from '/src/components/Navbar.vue'
const Api = require("../api/user.routes");
export default {

	components: {
		Navbar,
 	},
	
	data() {
    return {
		cvs: {},
		titreInput: '',		
	};
},
	methods: {
		async createNewCV(titre) {
			this.cvs.push({
				titre: titre,
			});
			Api.createCV(titre);
		},
	},
	mounted(){
		Api.fetchCVs().then(cvs => this.cvs = cvs.data)
	}
}
</script>

<style scoped>
#navbar {
  top: 0%
}

header {
	margin-bottom: 100px;
}

.card{
	margin-top: 1%;
	margin-bottom: 1%;	
}
</style>