<template>
  <div class="auth-container container col-4" >
    <div class="text-center">
    <h3>Sign In</h3>
    <p>
      <router-link :to="{ name: 'signup' }">Not registered yet?</router-link>
    </p>
    </div>
    <validation-errors v-if="validationErrors" :validationErrors="validationErrors"/>
    <form @submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Username" v-model="username"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="password"/>
      </fieldset>
      <div class="text-center">
        <button :disabled="isLoginSubmitting" class="btn btn-primary" style="margin-top: 5px;">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
<script>

import ValidationErrors from '../components/ValidationErrors.vue';

export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    ValidationErrors
  },
  computed: {
    isLoginSubmitting() {
      return this.$store.state.auth.isLoginSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
        .then(() => {
            this.$router.push({name: 'dashboard'})
          }
        )
    }
  }
};
</script>