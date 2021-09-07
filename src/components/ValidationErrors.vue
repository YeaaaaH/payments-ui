<template>
  <p v-for="errorMessage in errorMessages" :key="errorMessage" class="alert-danger">
    {{ errorMessage.message }}
  </p>
</template>

<script>
export default {
  name: "ValidationErrors",
  props: { validationErrors: Object },
  computed: {
    errorMessages() {
      return this.validationErrors;
    }
  }
};
</script>