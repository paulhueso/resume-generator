<template>
<div>
  <header>
    <Navbar id="navbar" @saveResume="saveResume" />
  </header>

  <body>
    <Lecture :resume="resume" />

    <b-sidebar id="sidebar-1" title="Sidebar" width='20%' right shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Formations" active>
          <div v-for="(experience, index) in resume.experiences" :key="index" class="px-3 py-2">
            <CardExperience 
              :modalName="experience.title" 
              :title="experience.title" 
              :period="experience.period" 
              :description="experience.description" 
              :index="index" 
              @updateExperience="updateExperience"
            />
          </div>
        </b-tab>

        <b-tab title="Experiences">
          <div v-for="(formation, index) in resume.formations" :key="index" class="px-3 py-2">
            <CardFormation 
              :modalName="formation.name" 
              :title="formation.name" 
              :period="formation.period" 
              :description="formation.description"
              :index="index"
              @updateFormation="updateFormation" 
            />
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
import CardExperience from '/src/components/CardExperience.vue'
import CardFormation from '/src/components/CardFormation.vue'
import AddCard from '/src/components/AddCard.vue'
import json from "/src/json/test.json";
const Api = require("../api/user.routes");



export default {
  components: {
    Lecture,
    Navbar,
    CardExperience,
    CardFormation,
    AddCard,
    ResumeStandard
  
  },
  name: 'Accueil',
  props: ['name'],
  data() {
    return {
      resume: json.cv_list[0]
    };
  },
  methods: {

    updateExperience(title, period, description, id) {
      this.resume.experiences[id].title = title; 
      this.resume.experiences[id].period = period; 
      this.resume.experiences[id].description = description;
    },

    updateFormation(name, period, description, id) {
      console.log("hey")
      this.resume.formations[id].name = name; 
      this.resume.formations[id].period = period; 
      this.resume.formations[id].description = description;
    },

    saveResume() {
      Api.saveResume(this.resume);
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

.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#navbar {
  top: 0%
}



</style>