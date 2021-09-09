<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <div class="">Logo</div>
        </div>
        <div class="col-4">
          <div class="row">
          <div class="col-4" href="#">Dashboard</div>
          <div class="col-8" href="#">Reports</div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
          <div class="col-8 d-flex justify-content-end" href="#">Settings</div>
          <div class="d-flex justify-content-center col-4" href="#">{{ currentUser.username }}</div>
          </div>
        </div>
      </div>
    </div>
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