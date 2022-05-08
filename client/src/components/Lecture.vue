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
        <div class="paper">
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

    <div class="paper">
      <p class="page_title_2"><b>Formations</b></p>
      <p class="page_bottom_3">
        <b>{{ user.current_organization }}</b>
      </p>
      <p class="page_bottom_4">
        {{ user.address }} . Tél: {{ user.tel }} . DT de Monsieur
        {{ user.firstname }} {{ user.surname }}
      </p>
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
          <p class="page_3_des"><b>Description :</b></p>

          <p class="page_3_desc">{{ exp.description }}</p>
        </li>
		</ul>
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
  margin: 1% auto 2.5% auto;
  padding: 1.5cm 2cm;
  height: 29.7cm;
  width: 21cm;
  line-height: 1.5em;
  color: #000000;
	background: #fff;
	display: -webkit-box;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
					flex-direction: column;
	border-radius: 4px;
	box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);  
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
  top: 88%;
  text-align: center;
}
.page_bottom_2 {
  position: relative;
  top: 88%;
  text-align: center;
}
.page_bottom_3 {
  position: relative;
  top: 96%;

  text-align: center;
}
.page_bottom_4 {
  position: relative;
  top: 96%;
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
  left: 10%;
  text-align: left;
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



