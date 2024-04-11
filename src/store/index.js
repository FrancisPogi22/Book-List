import { createStore } from "vuex";
import router from "@/router";

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem("token"),
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
    cart: getCartFromLocalStorage(localStorage.getItem("token")),
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
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
  },
  mutations: {
    addToCart: (state, index) => {
      let existingItem = state.cart.find(
        (item) => item.title == state.books[index].title
      );

      if (existingItem) {
        existingItem.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        let cartLocal = JSON.parse(localStorage.getItem("cart")),
          owner = localStorage.getItem("token"),
          productItem = {
            title: state.books[index].title,
            author: state.books[index].author,
            price: state.books[index].price,
            quantity: 1,
            owner: owner,
          };
        cartLocal.push(productItem);
        state.cart.push(productItem);
        localStorage.setItem("cart", JSON.stringify(cartLocal));
      }
    },
    removeItem: (state, index) => {
      let cartStorage = JSON.parse(localStorage.getItem("cart"));

      cartStorage.splice(index, 1);
      state.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartStorage));
    },
    loginSuccess(state) {
      state.cart = getCartFromLocalStorage(localStorage.getItem("token"));
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    checkOut(state, cartStorage) {
      state.cart = cartStorage;
    },
  },
  actions: {
    addToCart: ({ commit }, book) => {
      commit("addToCart", book);
    },
    removeItem: ({ commit }, index) => {
      commit("removeItem", index);
    },
    checkOut({ commit }, cartStorage) {
      commit("checkOut", cartStorage);
    },
    login({ commit }, account) {
      let accounts = JSON.parse(localStorage.getItem("accounts")),
        existingAccount = accounts.find(
          (acc) =>
            acc.email == account.email && acc.password == account.password
        );

      if (existingAccount) {
        localStorage.setItem("token", existingAccount.email);
        commit("loginSuccess");
        router.push({ name: "book-list" });
        return true;
      } else {
        return false;
      }
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit("logout");
      router.push({ name: "login" });
    },
  },
  modules: {},
});

function getCartFromLocalStorage(owner) {
  const cart = localStorage.getItem("cart");

  if (cart) {
    const cartItems = JSON.parse(cart);
    return cartItems.filter((item) => item.owner == owner);
  } else {
    return [];
  }
}
