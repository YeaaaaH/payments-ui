<template>
  <div class="auth-container">
    <h1>Sign In</h1>
    <p>
      <router-link :to="{ name: 'signup' }">Not registered yet?</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: 'SignIn',
};
</script>