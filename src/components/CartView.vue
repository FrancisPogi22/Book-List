<template>
  <section id="cart">
    <div class="wrapper">
      <div class="cart-con">
        <div class="cart-header">
          <div class="check-con">
            <input type="checkbox" />
            <p>Product</p>
          </div>
        </div>
        <div class="cart-widget-con">
          <div
            class="cart-widget"
            v-for="(item, index) in cartList"
            :key="index"
          >
            <div class="cart-details">
              <input type="checkbox" />
              <img src="../assets/Books.jpg" alt="Image" />
              <p>{{ item.book.title }}</p>
            </div>
            <div class="cart-action-con">
              <p>$ {{ item.book.price }}</p>
              <div class="quantity-con">
                <button>+</button>
                <input type="text"/>
                <button>-</button>
              </div>
              <p>$ {{ item.book.price }}</p>
              <div class="action-btn">
                <button @click="removeBook(index)">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    removeBook(index){
      this.$store.dispatch('removeItem', index);
    }
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
  },
};
</script>

<style scoped>
#cart .wrapper {
  max-width: 1440px;
}

#cart .cart-con {
  padding: 150px 0;
}

#cart .cart-header {
  justify-content: space-between;
  background: var(--global-text);
  margin-bottom: 10px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
}

#cart .check-con,
#cart .cart-header {
  display: flex;
  align-items: center;
}

#cart .check-con {
  gap: 20px;
}

#cart .cart-widget {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--global-text);
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  margin-bottom: 10px;
}

#cart .cart-widget img {
  width: 100px;
}

#cart .cart-details {
  display: flex;
  align-items: center;
  gap: 20px;
}

#cart .cart-widget .cart-action-con {
  display: flex;
  align-items: center;
  gap: 95px;
}

#cart .cart-widget input {
  width: 50px;
  padding: 10px;
  border: 1px solid var(--global-gray);
}

#cart .quantity-con {
  display: flex;
}

#cart .cart-header {
  padding: 20px;
}

#cart .quantity-con button {
  padding: 10px;
  font-size: 16px;
  background: transparent;
  border: 1px solid var(--global-gray);
}

#cart .action-btn button {
  background: var(--global-red);
  color: var(--global-text);
  padding: 10px 20px;
}
</style>
