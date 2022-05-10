<template>
<div>
  <header>
    <Navbar id="navbar" />
  </header>

  <body>
    <!-- <h1 class = "accueilclasse"> Sea V generator: do it whale</h1> -->
    <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F559809%2Fscreenshots%2F1672971%2Fwhale_logo.jpg&f=1&nofb=1" width="200" height="150" class = "logo"> -->
    <!-- <p>{{name}}</p> -->
    <ResumeStandard :user="user" />
    
    <b-sidebar id="sidebar-1" title="Sidebar" width='20%' right shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Formations" active>
          <div v-for="experience in user.experiences" :key="experience.id" class="px-3 py-2">
            <Card :modalName="experience.title" :title="experience.title" :period="experience.from" :description="experience.description" />
          </div>
          <!-- <AddCard /> -->
        </b-tab>

        <b-tab title="Experiences">
          <div v-for="formation in user.formations" :key="formation.id" class="px-3 py-2">
            <Card :modalName="formation.name" :title="formation.name" :period="formation.from" :description="formation.description" />
          </div>
        </b-tab>
      </b-tabs>
      
    </b-sidebar>
  </body>
</div>
</template>

<script>
import Lecture from '/src/components/Lecture.vue'  
import ResumeStandard from '/src/components/ResumeStandard.vue'  
import Navbar from '/src/components/Navbar.vue'
import Card from '/src/components/Card.vue'
import AddCard from '/src/components/AddCard.vue'
import json from "/src/json/test.json";

const Api = require("../api/user.routes");


export default {

  components: {
    Lecture,
    Navbar,
    Card,
    AddCard,
    ResumeStandard
  },
  name: 'Accueil',
  props: ['name'],
  data() {
    return {
      user: json,
    };
  },
  mounted()
    {
      //let token = requête get /api/user/
      if(false) //token par la suite
      {
        this.$router.push({name:'Login'})
      }
    }

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