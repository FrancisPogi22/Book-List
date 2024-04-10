<template>
  <section id="header">
    <div class="wrapper">
      <div class="header-con">
        <RouterLink to="/book-list">
          <img src="./assets/Logo.png" alt="Logo" />
        </RouterLink>
        <div class="side-nav" v-if="checkCredentials()">
          <RouterLink to="/book-list" class="view-all btn"
            >View All Books</RouterLink
          >
          <RouterLink to="/cart" class="cart-btn btn">
            <i class="bi bi-cart"> </i>
          </RouterLink>
          <button @click="$store.dispatch('logout')" class="logout-btn btn">
            <i class="bi bi-box-arrow-right"></i>
          </button>
        </div>
        <div v-if="!checkCredentials()" class="authenticate-nav">
          <RouterLink to="/" class="login btn">Login</RouterLink>
          <RouterLink to="/register" class="register btn">Register</RouterLink>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    checkCredentials() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style scoped>
#header {
  position: fixed;
  width: 100%;
  background: var(--global-text);
  z-index: 10;
  border-bottom: 1px solid var(--global-gray);
}

#header .wrapper {
  max-width: 1640px;
  width: 100%;
}

#header .authenticate-nav {
  display: flex;
  align-items: center;
}

#header .header-con {
  display: flex;
  justify-content: space-between;
  max-width: 1640px;
  width: 100%;
  align-items: center;
  padding: 15px 0;
}

#header .side-nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

#header .header-con img {
  width: 50px;
}

#header .header-con .search-con .btn {
  border-radius: 0 4px 4px 0;
}

#header .btn {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: transparent;
  border: 1px solid var(--global-gray);
}

#header .register,
#header .login {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-weight: 600;
  border: none;
  font-size: 14px;
  color: var(--global-purple);
}

#header .btn i {
  font-size: 18px;
}

#header .view-all {
  font-size: 14px;
  background: transparent;
  border: none;
  color: var(--global-purple);
  font-weight: 700;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

#header .header-con .cart-btn,
#header .header-con .logout-btn {
  border-radius: 4px;
  color: var(--global-black);
}
</style>