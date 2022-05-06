<template>
<div>
  <Header/>
  <Sidebar/>
  <h1 class = "accueilclasse"> Sea V generator: do it whale</h1>
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F559809%2Fscreenshots%2F1672971%2Fwhale_logo.jpg&f=1&nofb=1" width="200" height="150" class = "logo">
  <p>{{name}}</p>
	<Lecture/>
</div>
</template>
<script>
 import Lecture from '/src/components/Lecture.vue'
 import Sidebar from '/src/components/Sidebar.vue'
 import Header from '/src/components/Header.vue'

export default {
  components: {
	Lecture,
	Sidebar,
	Header
  },
  name: 'Accueil',
  props: ['name'],
}
</script>

<style scoped>

body {
  background: #ade8f4;
  font-family: 'Rubik', sans-serif;
  color: #000000
}

.accueilclasse{
  margin-top: 5%;
  text-align: center;
  color: #03045E;
}

.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
}



</style>