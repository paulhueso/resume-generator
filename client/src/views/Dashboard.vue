<template>
<div>
<header>
	<Navbar id="navbar" :isHomePage="false" />
</header> 
<b-card-group deck class="cards">
	<b-card v-for="(cv, index) in cvs" :key="cv.title" class="card" align="center">
		<b-card-text class="addBtn">
			<br /><p style="font-size: 40px">{{ cv.title }}</p>
		</b-card-text>
		<template #footer>
			<button type="button" class="btn btn-primary" @click="$router.push({ name: 'Home', params: {id:cv._id} })">Edit CV</button>
			<button type="button" class="btn btn-danger" @click="deleteResume(index)">Delete CV</button>
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

			Api.createCV(this.titleInput)
			.then(res => {
				console.log(res)
				if(res.status == 201) {
					this.cvs.push(res.data)
					this.$toast.open({
						message: "Resume created",
						type: "success",
						duration: 5000,
						dismissible: true
					});
				} else if(res.status == 401) {
					this.$toast.open({
						message: "Error, Unauthorized !",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				}else if(res.status == 500) {
					this.$toast.open({
						message: "Internal Server Error",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				}
			});
			
			// Hide the modal manually
			this.$nextTick(() => {
				this.$refs['modal'].hide()
			})
		},

		deleteResume(index) {
			Api.deleteCV(this.cvs[index]._id)
			.then(res => {
				if(res.status == 200) {
					this.$toast.open({
						message: "Resume deleted",
						type: "success",
						duration: 5000,
						dismissible: true
					});
					this.cvs.splice(index, 1);
				} else if(res.status == 401) {
					this.$toast.open({
						message: "Error, Unauthorized !",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				}else if(res.status == 500) {
					this.$toast.open({
						message: "Internal Server Error",
						type: "error",
						duration: 5000,
						dismissible: true
					});
				}
			});
		}
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

		Api.fetchCVs().then(cvs => this.cvs = cvs.data)
		.then(res => {
			if(res.status == 401) {
				this.$toast.open({
					message: "Error, Unauthorized !",
					type: "error",
					duration: 5000,
					dismissible: true
					});
			}else if(res.status == 500) {
				this.$toast.open({
					message: "Internal Server Error",
					type: "error",
					duration: 5000,
					dismissible: true
					});
				}
		})
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