<template>
<div>
  <b-card
        :title="title"
        :sub-title="period"
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
          invalid-feedback="Title is required"
          :state="titleState"
        >
          <b-form-input
              id="title"
              v-model="titleInput"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Periode de travail"
          label-for="period"
        >
          <b-form-input
              id="period"
              v-model="periodInput"
          ></b-form-input>
        </b-form-group>


        <b-form-group
            label="Description"
            label-for="description"
        >
          <b-form-textarea
              id="description"
              v-model="descriptionInput"
              rows="8"
          ></b-form-textarea>
        </b-form-group>
      </form>
      <template #modal-footer="{ ok, cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button variant="danger" @click="handleDelete()" >
          Delete
        </b-button>
        <b-button variant="secondary" @click="cancel()">
          Cancel
        </b-button>
        <b-button variant="primary" @click="ok()">
          OK
        </b-button>
        <!-- Button with custom close trigger value -->
      </template>
    </b-modal>

</div>
</template>

<script>
export default {
    props : [
        'modalName',
        'title',
        'period',
        'description',
        'index',
    ],
    data() {
      return {
        titleInput: this.title,
        periodInput: this.period,
        descriptionInput: this.description,
        titleState: null,
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.titleState = valid
        return valid;
      },
      resetModal() {
        this.titleInput = this.title
        this.periodInput = this.period
        this.descriptionInput = this.description
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

        this.$emit('updateExperience', this.titleInput, this.periodInput, this.descriptionInput, this.index)

        // Hide the modal manually
        this.$nextTick(() => {
          this.$refs['modal'].hide()
        })
      },
      handleDelete() {
 
        this.$nextTick(() => {
          this.$refs['modal'].hide()
        })

        this.$emit('deleteExperience', this.index);
        
      }
    }
}
</script>

<style>
</style>