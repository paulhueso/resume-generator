<template>
<div>
  <header>
    <Navbar id="navbar" />
  </header>

  <body>
    <!-- <h1 class = "accueilclasse"> Sea V generator: do it whale</h1> -->
    <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F559809%2Fscreenshots%2F1672971%2Fwhale_logo.jpg&f=1&nofb=1" width="200" height="150" class = "logo"> -->
    <!-- <p>{{name}}</p> -->
    <Lecture />
    
    <b-sidebar id="sidebar-1" title="Sidebar" width='20%' right shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Formations" active>
          <div class="px-3 py-2">
            <Card modalName="test" />

          </div>
        </b-tab>

        <b-tab title="Experiences">
          <div class="px-3 py-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </b-tab>
      </b-tabs>
      
    </b-sidebar>
  </body>
</div>
</template>

<script>
import Lecture from '/src/components/Lecture.vue'  
import Navbar from '/src/components/Navbar.vue'
import Card from '/src/components/Card.vue'

export default {
  components: {
    Lecture,
    Navbar,
    Card
  },
  name: 'Accueil',
  props: ['name'],
}
</script>

<style>

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

#navbar {
  top: 0%

}



</style>