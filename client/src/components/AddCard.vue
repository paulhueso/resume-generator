<template>
<div>
  <b-card
    class="mb-2"
    v-b-modal="modalName"
    title="+"
    align="center"
  >
    </b-card>

    <b-modal
      :id="modalName"
      size="lg"
      ref="modal"
      title="Add formation"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Experience"
          label-for="title"
          invalid-feedback="Title is required"
          :state="titleState"
        >
            <b-form-input
                id="title"
                v-model="title"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Periode de travail"
          label-for="period"
        >
            <b-form-input
                id="period"
                v-model="period"
            ></b-form-input>
        </b-form-group>


        <b-form-group
            label="Description"
            label-for="description"
        >
            <b-form-textarea
                id="description"
                v-model="description"
                rows="8"
            ></b-form-textarea>
        </b-form-group>
      </form>
    </b-modal>

</div>
</template>

<script>
export default {
    props : [
      'modalName',
      'isExperience',
      'createNewExperience',
      'createNewFormation'
    ],
    data() {
      return {
        title: '',
        period: '',
        description: '',
        titleState: null
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.titleState = valid
        return valid;
      },
      resetModal() {
        this.title = ''
        this.period = ''
        this.description = ''
        this.titleState = null
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        if(!this.checkFormValidity()) return

        if(this.isExperience) this.$emit('createNewExperience', this.title, this.period, this.description)
        else this.$emit('createNewFormation', this.title, this.period, this.description)

        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs['modal'].hide()
        })
      }
    }
}
</script>

<style>

</style>