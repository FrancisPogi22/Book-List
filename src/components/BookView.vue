<template>
  <section id="books">
    <div class="wrapper">
      <div class="books-con">
        <div class="books-header-con">
          <h2>Books</h2>
          <div class="search-con">
            <input
              type="text"
              placeholder="Search book title..."
              v-model="bookTitle"
            />
          </div>
        </div>
        <div class="books-con-list">
          <div
            class="books-widget"
            v-for="(book, index) in filteredBooks"
            :key="index"
          >
            <img src="../assets/Books.jpg" alt="Logo" />
            <div class="books-details">
              <h4>{{ book.title }}</h4>
              <p>{{ book.author }}</p>
              <p>₱{{ book.price }}</p>
              <button @click="addToCart(index)">
                <i class="bi bi-cart"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
    
<script>
export default {
  data() {
    return {
      bookTitle: "",
    };
  },
  computed: {
    filteredBooks() {
      if (this.bookTitle) {
        return this.$store.getters.availableBooks.filter((book) =>
          book.title.toLowerCase().includes(this.bookTitle.toLowerCase())
        );
      }
      return this.$store.getters.availableBooks;
    },
  },
  beforeCreate() {
    if (!localStorage.getItem("cart"))
      localStorage.setItem("cart", JSON.stringify([]));
  },
  methods: {
    addToCart(index) {
      this.$store.dispatch("addToCart", index);
      this.$notify({
        title: "Online Bookstore Application",
        type: "success",
        text: `"${this.$store.getters.availableBooks[index].title}" has been successfully added to your cart.`,
      });
    },
    searchBook() {
      this.list = this.$store.getters.availableBooks;
    },
  },
};
</script>
    
<style scoped>
#books {
  padding: 150px 0;
}

#books .wrapper {
  max-width: 1440px;
}

#books .books-widget .books-details {
  width: 100%;
  text-align: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
}

#books .books-widget {
  background: var(--global-text);
  border-radius: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--global-gray);
  padding: 15px;
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;
  height: 285px;
  transition: transform 0.2s;
}

#books .books-widget img {
  width: 180px;
  object-fit: cover;
  height: 200px;
  display: block;
  border-radius: 10px;
}

#books .books-widget .books-details p:nth-child(2) {
  font-size: 12px;
}

#books .books-widget .books-details p:nth-child(3) {
  font-size: 20px;
  color: var(--global-purple);
  font-weight: 700;
  display: none;
  transition: 0.2s;
}

#books .books-widget:hover {
  transform: scale(1.05);
  height: 360px;
  margin-bottom: -100px;
}

#books .books-widget:hover .books-details p:nth-child(3) {
  display: block;
}

#books .books-con-list {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

#books .books-details button {
  padding: 10px 20px;
  border-radius: 5px;
  background: var(--global-purple);
  color: var(--global-text);
  opacity: 0;
  display: none;
  transition: 0.2s;
}

#books .books-details button:hover {
  background: var(--global-purple-hover);
}

#books .books-widget:hover .books-details button {
  opacity: 1;
  display: block;
}

#books .books-details button i {
  margin-right: 10px;
}

#books .books-header-con {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#books .books-header-con input {
  border-radius: 4px;
  border: 1px solid var(--global-gray);
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
  width: 500px;
}
</style>