<template>
  <div class="auth-container">
    <h1>Sign Up</h1>
    <p>
      <router-link :to="{ name: 'signin' }">Already registered?</router-link>
    </p>
    <validation-errors v-if="validationErrors" :validationErrors="validationErrors"/>
    <form @submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Username" v-model="username"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Email" v-model="email"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="password"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="First name" v-model="firstName"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Last name" v-model="lastName"/>
      </fieldset>
      <button :disabled="isRegisterSubmitting">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
import ValidationErrors from '../components/ValidationErrors.vue';

export default {
  name: 'SignUp',
  components: {
    ValidationErrors
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    isRegisterSubmitting() {
      return this.$store.state.auth.isRegisterSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        email: this.email,
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      })
        .then(() => {
            this.$router.push({name: 'signin'})
          }
        )
    }
  }
};
</script>

<style>
.auth-container {
  text-align: center;
}
</style>
