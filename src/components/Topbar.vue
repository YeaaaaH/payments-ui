<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <a class="navbar-brand" href="#">Logo</a>
        </div>
        <div class="col-4">
          <a class="navbar-brand" href="#">Dashboard</a>
        </div>
        <div class="col-4">
          <a class="navbar-brand" href="#">Settings</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
  computed: {
    currentUser() {
      var user = this.$store.state.auth.user;
      return user ? user : "";
    }
  }
};
</script>
<style>
li {
  display: inline-block;
}
ul {
  display: inline-block;
}
</style>
