<template>
<div>
  <header>
    <Navbar id="navbar" @saveResume="saveResume" />
  </header>

  <body>
    <Lecture :user="user"/>

    <b-sidebar id="sidebar-1" title="Sidebar" width='20%' right shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Formations" active>
          <div v-for="(experience, index) in user.cv_list[0].experiences" :key="index" class="px-3 py-2">
            <Card :modalName="experience.title" :title="experience.title" :period="experience.from" :description="experience.description" :index="index" @updateExperience="updateExperience"/>
          </div>
        </b-tab>

        <b-tab title="Experiences">
          <div v-for="formation in user.cv_list[0].formations" :key="formation.id" class="px-3 py-2">
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
  methods: {

    updateExperience(title, period, description, id) {
      this.user.cv_list[0].experiences[id].title = title; 
      this.user.cv_list[0].experiences[id].period = period; 
      this.user.cv_list[0].experiences[id].description = description;
    },

    async saveResume() {
      Api.saveResume(this.user.cv_list[0]);
    },
  },
  mounted(){
    Api.fetchResume(this.$router.params.resume).then(resume => this.resume = resume)
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