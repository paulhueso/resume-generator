<template>
  <div>
    <div class="paper" :style="margin_">
      <p class="page_title_1"><b>CV ESN</b></p>
      <div class="userInfos">

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
    </div>
    
    <div v-for="exp in resume.experiences" :key="exp.organization">
      <div class="paper" :style="margin_">
        <div class="inside_paper">
          <p class="page_title"><b>Experiences</b></p>
          <div class="experiences">
          <p class="page_2_exp">
            <b>{{exp.title}}</b>
          </p>
          <p class="page_2_miss">
            {{ exp.period }}
          </p>
          <p class="page_2_descp"><b>Description :</b></p>
          <p class="page_2_desc">{{ exp.description }}</p>
          <div class="page_bottom">
            <p>
              <b>{{ user.current_organization }}</b>
            </p>
            <p class="">
              {{ user.address }} . Tél: {{ user.tel }} . DT de Monsieur
              {{ user.firstname }} {{ user.surname }}
            </p>
          </div>
          </div>
        </div>
      </div >
    
    </div>

    <div class="paper" :style="margin_">
      <div class="inside_paper">
        <p class="page_title_2"><b>Formations</b></p>
        <div
          class="formations"
          v-for="exp in resume.formations"
          :key="exp.school"
        >
          <p class="page_3_exp">
            <b>{{ exp.name }}</b>
          </p>
          <p class="page_3_place">
            {{ exp.period }}
          </p>
          <p class="page_3_des"><b>Description :</b></p>

          <p class="page_3_desc">{{ exp.description }}</p>
        </div>
        <div class="page_bottom">
          <p class="page_bottom_3">
            <b>{{ user.current_organization }}</b>
          </p>
          <p class="page_bottom_4">
            {{ user.address }} . Tél: {{ user.tel }} . DT de Monsieur
            {{ user.firstname }} {{ user.surname }}
          </p>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>

export default {
  props : [
    'resume',
    'user', 
    'margin_'
  ],
};

</script>

<style scoped>

.paper {
  margin: 5% auto 2% auto !important;
  padding: 1.5cm 2cm 4cm 2cm !important;
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
  position: relative; 
  text-align: justify;
  text-justify: inter-word;
}
.inside_paper {
  overflow: hidden;
}
.page_title_1 {
  text-align: center;
}
.page_title {
  position: relative;
  text-align: center;
}
.userInfos{
  position: absolute;
  bottom: 54px;
}

.experiences{
  margin-top: 50px;
}

.formations{
  margin-top: 50px;
}

.page_bottom {
  position: absolute;
  bottom: 42px;
  text-align: center;
  left: 111px;
}

.page_title_2 {
  position: relative;
  text-align: center;
}

</style>



