<template>
<div>
  <b-card
    overlay
    img-src="https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0="
    style="max-width: 20rem; max-height: 3rem;"
    class="mb-2"
    v-b-modal="modalName"
  >
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