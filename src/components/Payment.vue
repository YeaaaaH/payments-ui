<template>
  <div class="col-4">
    <p>Add payment</p>
    <validation-errors v-if="savePaymentErrors" :validationErrors="savePaymentErrors"/>
    <form @submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Title" v-model="title"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Amount" v-model="amount"/>
      </fieldset>

      <select class="form-select" v-model="categoryId">
        <option value="" disabled>Choose a category</option>
        <option v-for="category in categories" :key="category" v-bind:value="category.id">
          {{ category.name }}
        </option>
      </select>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Description" v-model="description"/>
      </fieldset>
      <div class="text-left">
        <button :disabled="isPaymentSubmitting" class="btn btn-success w-100" style="margin-top: 5px;">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>

import ValidationErrors from '../components/ValidationErrors.vue';

export default {
  name: "Payment",
  components: {
    ValidationErrors
  },
  props: {
    categories: Object
  },
  data() {
    return {
      title: '',
      amount: '',
      categoryId: '',
      description: ''
    }
  },
  computed: {
    isPaymentSubmitting() {
      return this.$store.state.payments.isPaymentSubmitting
    },
    savePaymentErrors() {
      return this.$store.state.payments.savePaymentErrors
    },
    userId() {
      return this.$store.state.auth.user.userId
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('savePayment', {
        title: this.title,
        amount: this.amount,
        categoryId: this.categoryId,
        description: this.description,
        userId: this.userId,
        createdOn: new Date()
      })
      this.title = ''
      this.amount = ''
      this.categoryId = ''
      this.description = ''
    }
  }
}
</script>