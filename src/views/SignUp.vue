<template>
  <div class="auth-container container">
    <div class="row">
      <div class="col-6 mx-auto">
        <div class="text-center">
          <h3>Sign Up</h3>
          <p>
            <router-link :to="{ name: 'signin' }">Already registered?</router-link>
          </p>
        </div>
        <validation-errors v-if="validationErrors" :validationErrors="validationErrors"/>
        <form @submit.prevent="onSubmit">

          <div class="form-group">
            <label>User name</label>
            <input type="text" class="form-control" placeholder="Username" v-model="username"/>
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input type="text" class="form-control" placeholder="Email" v-model="email"/>
          </div>

          <div class="form-group">
            <label>Password</label>
            <i class="fa fa-lock"></i>
            <input type="password" class="form-control" placeholder="Password" v-model="password"/>
          </div>

          <div class="form-group">
            <label>First name</label>
            <input type="text" class="form-control" placeholder="First name" v-model="firstName"/>
          </div>

          <div class="form-group">
            <label>Last name</label>
            <input type="text" class="form-control" placeholder="Last name" v-model="lastName"/>
          </div>
          <div class="text-center">
          <button :disabled="isRegisterSubmitting" class="btn btn-primary" style="margin-top: 5px;">
            Sign Up
          </button>
          </div>
        </form>
      </div>
    </div>
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