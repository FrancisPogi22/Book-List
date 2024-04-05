<template>
  <div class="">
    <h1>Book List</h1>
    <ul>
      <li v-for="book in salesBooks" :key="book.name">
        {{ book.name }} - {{ book.author }} - {{ book.price }}
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>
    
    <script>
export default {
  computed: {
    books() {
      return this.$store.state.books;
    },
    salesBooks() {
      return this.$store.getters.salesBooks;
    },
  },
  methods: {
    reducePrice() {
      this.$store.dispatch("reducePrice");
    },
  },
};
</script>
    
    <style>
</style>