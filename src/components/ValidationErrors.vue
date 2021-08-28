<template>
  <ul class="errors">
    <li v-for="errorMessage in errorMessages" :key="errorMessage">
      {{ errorMessage.message }}
    </li>
  </ul>
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

<style>
.errors {
  text-align: left;
}
</style>
