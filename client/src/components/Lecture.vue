<template>
<div>
<div class="paper">
<b class="page_title_1">Cv ESN</b>
<p class="page_1_elm">//////////////////////////////////// DOSSIER TECHNIQUE</p>
<p class="page_1_name">/////////////////////////// MONSIEUR {{users.firstname}} {{users.surname}} </p>
<b class="page_1_ent"> {{users.current_organization}}</b>
<p class="page_1_add">{{users.address}}</p>
<p class="page_1_tel">Tél: {{users.tel}}</p>
<p class="page_1_mel">Mail: {{users.mail}}</p>
 </div>

<ul>
      <li v-for="exp in users.cv_list[0].experiences" :key="exp.organization">
        
         <div class="paper"> 
        
         <b class="page_title">Experiences</b>
         <b class="page_2_exp">//////// {{exp.title}}///////////////////////////////////////////////////</b>
         <p class="page_2_miss">{{exp.from}} - {{exp.to}}| {{users.current_organization}} |{{exp.organization}}</p>
         <b class="page_2_descp">Description :</b>
         <b class="page_bottom_1">{{users.current_organization}}</b>
         <p class="page_bottom_2">{{users.address}} . Tél: {{users.tel}} . DT de Monsieur {{users.firstname}} {{users.surname}}</p>
         <p class="page_2_desc">{{exp.description}}</p>
        
          </div>
       </li>
</ul>

<div class="paper">
<b class="page_title_2">Formations</b>
<b class="page_bottom_3">{{users.current_organization}}</b>
<p class="page_bottom_4">{{users.address}} . Tél: {{users.tel}} . DT de Monsieur {{users.firstname}} {{users.surname}}</p>
<ul>
      <li  class="space" v-for="exp in users.cv_list[0].formations" :key="exp.school">
        
         <b class="page_3_exp">//////// {{exp.name}}</b>
         <p class="page_3_place">{{exp.from}} - {{exp.to}}| {{exp.school}} |{{exp.organization}}</p>
         <p class="page_3_des">Description :</p>
       
         <p class="page_3_desc">{{exp.description}}</p>
         
        
          
       </li>
       
</ul>

</div>

</div>
</template>

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
.page_title_1{
    
    text-align: center
}
.page_title{
    position: relative;
    
    left:210px
    
}
.page_1_elm{
position: absolute;
bottom:-130px;
left:500px;
}
.page_1_name{
    position: absolute;
    bottom: -170px;
    left:500px;
    
}
.page_1_ent{
    position: absolute;
    bottom: -240px;
    left:490px;
}
.page_1_add{
    position: absolute;
    bottom: -260px;
    left:490px;
}
.page_1_tel{
    position: absolute;
    bottom: -280px;
    left:490px;
}
.page_1_mel{
    position: absolute;
    bottom: -300px;
    left:490px;
}

.page_2_exp{
    position: relative;
    top: 100px;
    right:100px;
}

.page_2_miss{
    position: relative;
    top: 110px;
    right:100px;
}
.page_2_descp{
     position: relative;
    top: 180px;
    right:170px;
}
.page_2_desc{
    position: relative;
    top: 200px;
    right:10px;
}
.page_bottom_1{
   position: relative;
   top:900px;
   right:80px; 
}
.page_bottom_2{
   position: relative;
   top:910px;
    
}
.page_bottom_3{
   position: relative;
   top:955px;
   right:80px; 
}
.page_bottom_4{
   position: relative;
   top:960px;
    
}
.page_title_2{
    position: relative;
    left:40px
    
}
.page_3_exp{
    position: relative;
    top: 10px;
    right:210px;
}
.page_3_place{
    position: relative;
    top: 20px;
    right:100px;
}
.page_3_des{
    position: relative;
    top: 40px;
    right:220px;
}
.page_3_desc{
    position: relative;
    top: 50px;
    right:50px;
}
.space{
   margin-top: 100px;
    
}
</style>

<script>
import json from '/src/json/test.json'
      export default{
          data(){
              return{
                  users: json,
                  
              }
          }
      }
</script>

