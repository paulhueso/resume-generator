<template>
  <div>
    <div class="paper">
      <div class="writeableArea">
        <!-- <p class="page_title_1"><b>Cv ESN</b></p>
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
        <p class="">Mail: {{ user.mail }}</p> -->
        <div class="">
          <h3>Experiences</h3>
          <draggable
            class="list-group"
            tag="ul"
            v-model="user.cv_list[0].experiences"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <Card v-for="el in user.cv_list[0].experiences" :key="el.id" :title="el.organization" :description="el.description" />
            </transition-group>
          </draggable>
          {{ user.cv_list[0].experiences }}

        <h3>Formations</h3>
          <draggable
            class="list-group"
            tag="div"
            v-model="formations"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <Card v-for="el in user.cv_list[0].formations" :key="el.order" :title="el.school" :period="el.from" :description="el.description" />
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Card from '/src/components/Card.vue'


export default {
  components: {
    draggable,
    Card
  },
  data() {
    return {
      drag: false,
      exp: [
        {
          "organization": "Unlatch",
          "order": 1,
        },
        {
          "organization": "HackerOne",
          "order": 2
        },
      ],
      formations: [
        {
          "name": "INSA HdF",
          "order": 1,
        },
        {
          "name": "Polytech Sorbonne",
          "order": 2
        },
      ]
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  props: ['user'],
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

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>



