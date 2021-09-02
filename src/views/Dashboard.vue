<template>
  <topbar/>
  <chart/>
  <payment/>
  <transactions/>
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
  mounted() {
    this.$store.dispatch("getUser");
    this.$store.dispatch("getCategories");
  }
};
</script>
