<template>
  <div>
    <div class="paper">
      <div class="writeableArea">
        <p class="page_title_1"><b>Cv ESN</b></p>
        <p class="">
          //////////////////////////////////// DOSSIER TECHNIQUE
        </p>
        <p class="">
          /////////////////////////// MONSIEUR {{ user.firstname }}
          {{ user.surname }}
        </p>
        <p class="">
          <b> {{ user.current_organization }}</b>
        </p>
        <p class="">{{ user.address }}</p>
        <p class="">Tél: {{ user.tel }}</p>
        <p class="">Mail: {{ user.mail }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  props: ['user'],
};
</script>

<style scoped >
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
</style>



