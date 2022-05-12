<template>
<div>
<header>
	<Navbar id="navbar" :isHomePage="false" />
</header> 
<b-card-group deck class="cards">
	<b-card v-for="cv in cvs" :key="cv.title" :title="cv.title" class="card" align="center">
		<template #footer>
			<button type="button" class="btn btn-primary" @click="$router.push({ name: 'Home', params: {id:cv._id} })">Edit CV</button>
			<button type="button" class="btn btn-danger">Delete CV</button>
      	</template>
	</b-card>
	<b-card
		v-b-modal="'addResume'"
		align="center"
		class="card"
	>
		<b-card-text class="addBtn">
			<br /><br />+
		</b-card-text>
	</b-card>
 </b-card-group>

<b-modal
	id="addResume"
	size="lg"
	ref="modal"
	title="Add resume"
	@show="resetModal"
	@hidden="resetModal"
	@ok="handleOk"
>
	<form ref="form" @submit.stop.prevent="handleSubmit">
	<b-form-group
		label="Title"
		label-for="title"
		invalid-feedback="Title is required"
		:state="titleState"
	>
		<b-form-input
			id="title"
			v-model="titleInput"
			required
		></b-form-input>
	</b-form-group>


	<b-form-group
		label="Description"
		label-for="description"
	>
		<b-form-textarea
			id="description"
			v-model="description"
			rows="8"
		></b-form-textarea>
	</b-form-group>
	</form>
</b-modal>
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
		titleInput: '',	
		titleState: null,
		description: ''	
	};
},
	methods: {
		checkFormValidity() {
			const valid = this.$refs.form.checkValidity()
			this.titleState = valid
			return valid;
		},
		resetModal() {
			this.titleInput = ''
			this.description = ''
			this.titleState = null
		},
		handleOk(bvModalEvent) {
			// Prevent modal from closing
			bvModalEvent.preventDefault()
			// Trigger submit handler
			this.handleSubmit()
		},
		async handleSubmit() {
			if(!this.checkFormValidity()) return

			this.cvs.push({
				title: this.titleInput,
			});
			Api.createCV(this.titleInput);
			
			// Hide the modal manually
			this.$nextTick(() => {
				this.$refs['modal'].hide()
			})
		}
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

.cards {
	display: flex;
	justify-content: center;
	gap: 100px;
	flex-wrap: wrap;
}

header {
	margin-bottom: 100px;
}

button {
	margin-right: 5px;
	width: 120px;
}

.card{
	margin-top: 1%;
	margin-bottom: 1%;
	min-width: 18rem; 	
	width: 18rem; 
	height: 25rem;
}

.addBtn {
	font-size: 3em;
	vertical-align: middle;
}
</style>