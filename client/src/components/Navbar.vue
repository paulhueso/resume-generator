<template>

<div>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar" >
    <b-navbar-brand id="title" href="#"> Sea V generator - Do it whale</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/dashboard">Dashboard</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto nav-right">
        <div v-if="isHomePage">
          <b-button variant="secondary" @click="generatePDF()" class="navbtn">Download</b-button>
          <b-button v-if="isModified" variant="danger" @click="restoreResume()" class="navbtn">Restore resume</b-button>
          <b-button v-b-toggle.sidebar-1 variant="primary" class="navbtn">Edit resume</b-button>
          <b-button variant="success" class="navbtn" @click="saveResume()">Save</b-button>
        </div>

        <b-nav-item href="#/profile">Profile</b-nav-item>
        <b-nav-item @click="Logout">Sign Out</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
const Api = require("../api/user.routes");
export default {
  methods: {
    Logout: async function () {
      Api.logout()
      .then(res => {
        if(res.status == 200) {
          this.$router.push({ name: 'Login'});
        } 
      });
    },
    saveResume() {
      this.$emit('saveResume')
    },
    generatePDF() {
      this.$emit('generatePDF')
    },
    restoreResume() {
      this.$emit('restoreResume');
    }
  },
  props: [
    'isHomePage',
    'isModified'
  ]

}

</script>
<style scoped>

#title {
  margin-left: 15px;
}

.navbtn {
  margin-right: 10px;
}

#navbar {
  position: fixed;
  width: 100%;
  z-index: 250;
}

</style>
