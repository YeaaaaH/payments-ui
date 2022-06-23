<template>
  <topbar/>
  <div class="container-fluid">
    <div class="row">
      <chart/>
      <payment :categories="categories"/>
    </div>
  </div>
  <div class="container">
    <transactions :userId="userId"/>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Chart from "../components/Chart.vue";
import Payment from "../components/Payment.vue";
import Transactions from "../components/Transactions.vue";

export default {
  name: "Dashboard",
  components: {
    Topbar,
    Chart,
    Payment,
    Transactions
  },
  async created() {
    this.$store.dispatch("getUser");
    this.$store.dispatch("getCategories");
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
    userId() {
      return this.$store.state.auth.user.userId
    }
  },
};
</script>