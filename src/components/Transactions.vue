<template>
  <h3>Last month transactions</h3>
  <validation-errors
      v-if="getPaymentErrors"
      :validationErrors="getPaymentErrors"
  />
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Info</th>
        <th>Date</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody v-for="transaction in getTransactions" :key="transaction">
      <tr>
        <td>{{ transaction.title }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.createdOn }}</td>
        <td>{{ transaction.categoryName }}</td>
        <td>{{ transaction.amount }}</td>
        <td>
          <button class="btn btn-warning btn-sm" style="margin:2px;">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-danger btn-sm" style="margin:2px;">
            <i class="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ValidationErrors from "../components/ValidationErrors.vue";

export default {
  name: "Transactions",
  props: {
    userId: Number
  },
  components: {
    ValidationErrors
  },
  mounted() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    this.$store.dispatch("getListPayments", {
      userId: this.userId,
      year: year,
      month: month
    });
  },
  computed: {
    isPaymentSubmitting() {
      return this.$store.state.payments.isPaymentsLoading;
    },
    getPaymentErrors() {
      return this.$store.state.payments.getPaymentsErrors;
    },
    getTransactions() {
      return this.$store.state.payments.payments;
    }
  }
};
</script>
