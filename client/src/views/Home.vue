<template>
<div>
  <Header/>
  <Sidebar/>
  <h1>Accueil</h1>
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
  background: #131313;
  font-family: 'Rubik', sans-serif;
}



</style>