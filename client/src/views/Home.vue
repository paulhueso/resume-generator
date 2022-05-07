<template>
<div>
  <Header/>
  <Sidebar/>
  <h1>Accueil</h1>
  <p>{{name}}</p>
	<download-button
            class="btn btn-primary"
            dom="#invoice"
            name="myFilename.pdf"
          />
  <div id="invoice">
  <Lecture/>
</div>
</div>
</template>
<script>
 import Lecture from '/src/components/Lecture.vue'
 import Sidebar from '/src/components/Sidebar.vue'
 import Header from '/src/components/Header.vue'
 import DownloadButton from "/src/components/DownloadButton.vue";
export default {
  components: {
	Lecture,
	Sidebar,
	Header,
  DownloadButton
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