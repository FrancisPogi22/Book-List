import { createStore } from "vuex";

export default createStore({
  state: {
    books: [
      {
        title: "SNOWFLAKES",
        author: "James Smith",
        price: 100,
        status: 0,
      },
      {
        title: "DREAMCATCHER",
        author: "Emily Johnson",
        price: 200,
        status: 0,
      },
      {
        title: "HEARTBEATS",
        author: "Benjamin Brown",
        price: 300,
        status: 0,
      },
      {
        title: "NIGHTMARES",
        author: "Sophia Lee",
        price: 400,
        status: 0,
      },
      {
        title: "AFTERMATHS",
        author: "Daniel White",
        price: 500,
        status: 0,
      },
      {
        title: "RAINDROPS",
        author: "Olivia Clark",
        price: 600,
        status: 0,
      },
      {
        title: "STARLIGHT",
        author: "Matthew Davis",
        price: 700,
        status: 0,
      },
      {
        title: "FIREWORKS",
        author: "Isabella Martinez",
        price: 800,
        status: 0,
      },
      {
        title: "BUTTERFLY",
        author: "Alexander Wilson",
        price: 900,
        status: 0,
      },
      {
        title: "MOONLIGHT",
        author: "Lily Moore",
        price: 1000,
        status: 0,
      },
    ],
    cart: [],
  },
  getters: {
    availableBooks: (state) => {
      return state.books.filter((book) => {
        return book.status == 0;
      });
    },
    cartList: (state) => {
      return state.cart;
    },
    totalCost: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  mutations: {
    addToCart: (state, index) => {
      let existingItem = state.cart.find(
          (item) => item.title == state.books[index].title
        ),
        item = state.books[index];

      existingItem
        ? existingItem.quantity++
        : state.cart.push({
            title: item.title,
            author: item.author,
            price: item.price,
            quantity: 1,
          });
    },
    removeItem: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart: ({ commit }, book) => {
      commit("addToCart", book);
    },
    removeItem: ({ commit }, index) => {
      commit("removeItem", index);
    },
  },
  modules: {},
});
