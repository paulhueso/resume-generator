<template>
  <Header/>
  <Sidebar/>
  <h1>Accueil</h1>
  <p>{{name}}</p>
  <div class="paper">

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

.paper {
margin-top: 35px;
margin-left: auto;
margin-right: auto;
margin-bottom: 35px;
height: 1060px;
width: 750px;
padding: 35px 20px;
line-height: 1.5em;
color: 
#000000;
background-color: 
rgb(255, 255, 255);
box-shadow: 5px 5px 5px rgba(0,0,0,0.7);
}

</style>