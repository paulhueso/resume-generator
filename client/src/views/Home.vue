<template>
<div>
  <header>
    <Navbar 
      id="navbar" 
      :isHomePage="true"
      :isModified="isModified" 
      @saveResume="saveResumeBDD" 
      @generatePDF="generateReport"
      @restoreResume="restoreResume"  
    />
  </header>

  <body>
     <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1000"
        filename="Cv"
        :pdf-quality="2"
        :manual-pagination="true"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
          <Lecture :resume="resume" :user="user" margin_="margin: 0 auto 0 auto !important"/>
        </section>
    </vue-html2pdf>
    <Lecture :resume="resume" :user="user" margin_="margin: 5% auto 2% auto !important"/>
    <b-sidebar id="sidebar-1" title="Informations" width='20%' right shadow>
      <b-tabs content-class="mt-3">
        <b-tab title="Experiences" active>
          <div v-for="(experience, index) in resume.experiences" :key="index" class="px-3 py-2">
            <CardExperience 
              :modalName="experience.title" 
              :title="experience.title" 
              :period="experience.period" 
              :description="experience.description" 
              :index="index" 
              @updateExperience="updateExperience"
              @deleteExperience='deleteExperience'
            />
          </div>
          <AddCard 
            class="px-3" 
            modalName="addExp" 
            :isExperience='true' 
            @createNewExperience='createNewExperience' 
          />
        </b-tab>

        <b-tab title="Formations">
          <div v-for="(formation, index) in resume.formations" :key="index" class="px-3 py-2">
            <CardFormation 
              :modalName="formation.name" 
              :title="formation.name" 
              :period="formation.period" 
              :description="formation.description"
              :index="index"
              @updateFormation="updateFormation" 
              @deleteFormation='deleteFormation' 

            />
          </div>
          <AddCard 
            class="px-3" 
            modalName="addFormation" 
            :isExperience='false' 
            @createNewFormation='createNewFormation' 
          />
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
const Api = require("../api/user.routes");
import VueHtml2pdf from 'vue-html2pdf'

export default {
  components: {
    Lecture,
    Navbar,
    CardExperience,
    CardFormation,
    AddCard,
    ResumeStandard,
    VueHtml2pdf
  
  },
  name: 'Accueil',
  data() {
    return {
      idResume: '',
      user: {},
      resume:{},
      isModified: false
    };
  },
  methods: {
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    },

    async updateExperience(title, period, description, id) {
      this.resume.experiences[id].title = title; 
      this.resume.experiences[id].period = period; 
      this.resume.experiences[id].description = description;
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true)
      .then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
  },

    async updateFormation(name, period, description, id) {
      this.resume.formations[id].name = name; 
      this.resume.formations[id].period = period; 
      this.resume.formations[id].description = description;
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true)
      .then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
    },

    async saveResumeBDD() {
      Api.saveResumeBDD().then(res => {
        if(res.status == 304 || res.status == 200){
          this.$toast.open({
            message: "Resume saved!",
            type: "success",
            duration: 5000,
            dismissible: true
          });
          this.isModified = false;
        } else {
          this.$toast.open({
            message: "Error, could not be saved!",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }
      });
    },

    async createNewExperience(title, period, description) {
      this.resume.experiences.push({
        title: title,
        period: period,
        description: description
      });
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true).then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );

    },

    async createNewFormation(title, period, description) {
      this.resume.formations.push({
        name: title,
        period: period,
        description: description
      });
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true).then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
    },

    async deleteExperience(index) {
      this.resume.experiences.splice(index, 1);
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true).then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
    },

    async deleteFormation(index) {
      this.resume.formations.splice(index, 1);
      Api.saveResumeSession(this.resume, this.idResume).then(() => this.isModified = true).then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error: index in session CV list not found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 403){
          this.$toast.open({
            message: "Forbidden: Not a CV of User",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
    },

    async restoreResume() {
      Api.fetchCvBeforeEdit(this.idResume).then(res => {
        if(res.status == 200) {
          this.resume = res.data;
          this.isModified = false;
          this.$toast.open({
              message: "Resume restored!",
              type: "success",
              duration: 5000,
              dismissible: true
          });
        } else {
          this.$toast.open({
              message: "Could not restore resume...",
              type: "success",
              duration: 5000,
              dismissible: true
          });
        }
      });
    }
  },


  mounted() {
    Api.getUser()
		.then(res => {
		if(res.response.status == 401) {
      this.$router.push({ name: 'Login'});
      }else if(res.status == 401 ) {
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
    this.idResume = this.$route.params.id;
    Api.fetchCVById(this.idResume).then(res => this.resume = res)
    .then(res => {
      if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    });
    Api.fetchUserInfos().then(res => this.user = res).then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
    Api.fetchCvStatus(this.idResume).then(res => this.isModified = (res.status == 200))
    .then(res => {
        if(res.status == 500) {
          this.$toast.open({
            message: "Internal Server Error",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        } else if(res.status == 207){
          this.$toast.open({
            message: "Not modification found",
            type: "error",
            duration: 5000,
            dismissible: true
          });
        }else if(res.status == 401){
          this.$toast.open({
            message: "Unauthorized: Please log in",
            type: "error",
            duration: 5000,
            dismissible: true
          });
      }
    }
    );
  },

}
</script>

<style>

body {
  background: #ade8f4;
  font-family: 'Rubik', sans-serif;
  color: #000000;
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