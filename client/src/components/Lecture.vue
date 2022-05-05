<template>
<p>Cv ESN</p>

<p>//////////////////////////////////// DOSSIER TECHNIQUE</p>
<p>/////////////////////////// MONSIEUR {{users.firstname}} {{users.surname}} </p>
<div id="app">
    
      
         {{users}}
     
  </div>
</template>

<style scoped>

</style>

<script>
import json from '/src/json/test.json'
      export default{
          data(){
              return{
                  users: json
              }
          }
      }
</script>

