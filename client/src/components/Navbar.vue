<template>

<div>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar" >
    <b-navbar-brand id="title" href="#"> Sea V generator - Do it whale</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto nav-right">
        <b-button v-b-toggle.sidebar-1 variant="primary" class="navbtn">Edit resume</b-button>
        <b-button variant="success" class="navbtn" @click="saveResume()">Save</b-button>


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {

  methods: {
    saveResume() {
      this.$emit('saveResume')
    }
  }

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