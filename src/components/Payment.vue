<template>
    <div class="col-4">
    <p>Add payment</p>
    <form @submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Title" v-model="title"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Amount" v-model="amount"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Category" v-model="category"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Description" v-model="description"/>
      </fieldset>
      <div class="text-left">
        <button :disabled="isLoginSubmitting" class="btn btn-success" style="margin-top: 5px;">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Payment",
    data() {
    return {
      title: '',
      amount: '',
      category: '',
      description: ''
    }
  },
  computed: {
    isPaymentSubmitting() {
      return this.$store.state.payments.isPaymentSubmitting
    },
    validationErrors() {
      return this.$store.state.payments.validationErrors
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
        category: this.category,
        description: this.description,
        userId: this.userId
      })
    }
  }
}
</script>