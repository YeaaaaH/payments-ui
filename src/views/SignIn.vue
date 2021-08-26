<template>
  <div class="auth-container">
    <h1>Sign In</h1>
    <p>
      <router-link :to="{ name: 'signup' }">Not registered yet?</router-link>
    </p>
    <form @submit.prevent="onSubmit">
      <fieldset class="form-group">
        <input type="text" class="form-control" placeholder="Username" v-model="username"/>
      </fieldset>

      <fieldset class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="password"/>
      </fieldset>
      <button :disabled="isLoginSubmitting">
        Sign In
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    isLoginSubmitting() {
      return this.$store.state.auth.isLoginSubmitting
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
        .then(() => {
            this.$router.push({name: 'home'})
          }
        )
    }
  }
};
</script>