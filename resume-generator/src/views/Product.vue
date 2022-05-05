<template>
 <Header/>
  <Sidebar/>

 <div class="paper">
   <p>404 Not Found</p>
   
</div>

</template>
<script>
 import Sidebar from '/src/components/Sidebar.vue'
 import Header from '/src/components/Header.vue'
export default {
  components: {
    Sidebar,
    Header
  }
}
  </script>
<style >
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