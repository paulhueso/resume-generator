<template>
<div>
  <b-card
        title="Position title"
        sub-title="Date"
        style="max-width: 20rem;"
        class="mb-2"
        v-b-modal="modalName"
    >
    <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    </b-card>

    <b-modal
      :id="modalName"
      size="lg"
      ref="modal"
      title="Edit informations"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Experience"
          label-for="title"
          invalid-feedback="Complete all infos"
          :state="nameState"
        >
            <b-form-input
                id="title"
                v-model="title"
                :state="nameState"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Periode de travail"
          label-for="period"
          invalid-feedback="Complete all infos"
          :state="nameState"
        >
            <b-form-input
                id="period"
                v-model="period"
                :state="nameState"
                required
            ></b-form-input>
        </b-form-group>


        <b-form-group
            label="Description"
            label-for="description"
            invalid-feedback="Complete all infos"
            :state="nameState"
        >
            <b-form-input
                id="description"
                v-model="description"
                :state="nameState"
                required
            ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

</div>
</template>

<script>
export default {
    props : ['modalName'],
    data() {
      return {
        title: '',
        period: '',
        description: '',
        nameState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
}
</script>

<style>

</style>