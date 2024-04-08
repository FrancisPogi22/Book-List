<template>
  <section id="header">
    <div class="wrapper">
      <div class="header-con">
        <img src="./assets/Logo.png" alt="Logo" />
        <div class="search-con">
          <input type="text" placeholder="Search book title..." />
          <button class="btn"><i class="bi bi-search"></i></button>
        </div>
        <div class="side-nav">
          <RouterLink to="/" class="view-all btn">View All Books</RouterLink>
          <RouterLink to="/cart" class="cart-btn btn">
            <i class="bi bi-cart"> </i>
          </RouterLink>
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

#header .header-con input {
  border-radius: 4px;
  border: 1px solid var(--global-gray);
  border-radius: 4px 0 0 4px;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
  width: 500px;
}

#header .header-con .search-con .btn {
  border-radius: 0 4px 4px 0;
}

#header .header-con .search-con {
  display: flex;
}

#header .btn {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: transparent;
  border: 1px solid var(--global-gray);
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

#header .header-con .cart-btn {
  border-radius: 4px;
  color: var(--global-black);
}
</style>