<template>

  <div>
	

     
    <div class="paper">
      <p class="page_title_1"><b>Cv ESN</b></p>
      <p class="page_1_elm">
        //////////////////////////////////// DOSSIER TECHNIQUE
      </p>
      <p class="page_1_name">
        /////////////////////////// MONSIEUR {{ user.firstname }}
        {{ user.surname }}
      </p>
      <p class="page_1_ent">
        <b> {{ user.current_organization }}</b>
      </p>
      <p class="page_1_add">{{ user.address }}</p>
      <p class="page_1_tel">Tél: {{ user.tel }}</p>
      <p class="page_1_mel">Mail: {{ user.mail }}</p>
    </div>

    <ul>
      <li v-for="exp in user.cv_list[0].experiences" :key="exp.organization">
        <div class="paper" >
         
          <p class="page_title"><b>Experiences</b></p>
          <p class="page_2_exp">
            <b>////////{{exp.title}}///////////////////////////////////////////////////</b>
          </p>
          <p class="page_2_miss">
            {{ exp.from }} - {{ exp.to }}| {{ user.current_organization }} |{{
              exp.organization
            }}
          </p>
          <p class="page_2_descp"><b>Description :</b></p>
          <p class="page_bottom_1">
            <b>{{ user.current_organization }}</b>
          </p>
          <p class="page_bottom_2">
            {{ user.address }} . Tél: {{ user.tel }} . DT de Monsieur
            {{ user.firstname }} {{ user.surname }}
          </p>
          <p class="page_2_desc">{{ exp.description }}</p>
          </div>
       
      </li>
    </ul>

    <div class="paper" id="page">
      <p class="page_title_2"><b>Formations</b></p>
      
      
      <ul>
        <li
          class="space"
          v-for="exp in user.cv_list[0].formations"
          :key="exp.school"
        >
          <p class="page_3_exp">
            <b>//////// {{ exp.name }}</b>
          </p>
          <p class="page_3_place">
            {{ exp.from }} - {{ exp.to }}| {{ exp.school }} |{{
              exp.organization
            }}
          </p>
          <b class="page_3_des">Description :</b>

          <p class="page_3_desc">{{ exp.description }}</p>
        </li>
		</ul>
    <p class="page_bottom_3">
        <b>{{ user.current_organization }}</b>
      </p>
      <p class="page_bottom_4">
        {{ user.address }} . Tél: {{ user.tel }} . DT de Monsieur
        {{ user.firstname }} {{ user.surname }}
      </p>
    </div>

  

</div>
</template>

<script>
import json from "/src/json/test.json";

export default {
 
  data() {
    return {
      user: json,
    };
  },
};
</script>

<style >
.paper {
  position: relative;

  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5%;
  height: 29.7cm;
  width: 21cm;
  padding: 35px 20px;
  line-height: 1.5em;
  color: #000000;
  background-color: rgb(255, 255, 255);

}
.page_title_1 {
  text-align: center;
}
.page_title {
  position: relative;

  text-align: center;
}
.page_1_elm {
  position: relative;
  bottom: -78.5%;
  left: 9%;
  text-align: left;
}
.page_1_name {
  position: relative;
  bottom: -80%;
  left: 9%;
  text-align: left;
}
.page_1_ent {
  position: relative;
  bottom: -81%;
  left: 11%;
  text-align: left;
}
.page_1_add {
  position: relative;
  bottom: -81%;
  left: 11%;
  text-align: left;
}
.page_1_tel {
  position: relative;
  bottom: -81%;
  left: 11%;
  text-align: left;
}
.page_1_mel {
  position: relative;
  bottom: -81%;
  left: 11%;
  text-align: left;
}

.page_2_exp {
  position: relative;
  top: 8%;
  left: 10%;
  text-align: left;
}

.page_2_miss {
  position: relative;
  top: 10%;
  left: 10%;
  text-align: left;
}
.page_2_descp {
  position: relative;
  top: 15%;
  left:10%;
  text-align: left;
}
.page_2_desc {
  position: relative;
  top: 11%;
  left:3%;
  text-align: left;
  
}
.page_bottom_1 {
  position: relative;
  top: 83%;
  text-align: center;
}
.page_bottom_2 {
  position: relative;
  top: 83%;
  text-align: center;
}
.page_bottom_3 {
  position: relative;
  top: 64%;

  text-align: center;
}
.page_bottom_4 {
  position: relative;
  top: 64%;
  text-align: center;
}
.page_title_2 {
  position: relative;
  text-align: center;
}
.page_3_exp {
  position: relative;
  top: auto;
  left: 10%;
  text-align: left;
}
.page_3_place {
  position: relative;
  top: auto;
  left: 15%;
  text-align: left;
}
.page_3_des {
  position: relative;
  top: auto;
  right: 30%;
}
.page_3_desc {
  position: relative;
  top: auto;
  left: 15%;
  text-align: left;
}
.space {
  margin-top: 5%;
}
</style>



