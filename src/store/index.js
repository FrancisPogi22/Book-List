import { createStore } from "vuex";

export default createStore({
  state: {
    books: [
      {
        name: "Book 1",
        author: "author 1",
        price: 100,
        status: 0,
      },
      {
        name: "Book 2",
        author: "author 2",
        price: 200,
        status: 0,
      },
      {
        name: "Book 3",
        author: "author 3",
        price: 300,
        status: 0,
      },
      {
        name: "Book 4",
        author: "author 4",
        price: 400,
        status: 0,
      },
      {
        name: "Book 5",
        author: "author 5",
        price: 500,
        status: 0,
      },
      {
        name: "Book 6",
        author: "author 6",
        price: 600,
        status: 0,
      },
      {
        name: "Book 7",
        author: "author 7",
        price: 700,
        status: 0,
      },
      {
        name: "Book 8",
        author: "author 8",
        price: 800,
        status: 0,
      },
      {
        name: "Book 9",
        author: "author 9",
        price: 900,
        status: 0,
      },
      {
        name: "Book 10",
        author: "author 10",
        price: 1000,
        status: 0,
      },
    ],
  },
  getters: {
    salesBooks: (state) => {
      let salesBooks = state.books.map((book) => {
        return {
          name: book.name,
          author: book.author,
          price: book.price / 2,
        };
      });

      return salesBooks;
    },
  },
  mutations: {
    reducePrice: (state) => {
      state.books.forEach((book) => {
        book.price -= 10;
      });
    },
  },
  actions: {
    reducePrice: (context) => {
      setTimeout(() => {
        context.commit("reducePrice");
      }, 3000);
    },
  },
  modules: {},
});
