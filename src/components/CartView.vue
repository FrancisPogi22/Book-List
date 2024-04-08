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
              <p>{{ item.title }}</p>
            </div>
            <div class="cart-action-con">
              <p>₱{{ item.price }}</p>
              <div class="quantity-con">
                <button @click="incrementQuantity(index)">+</button>
                <input
                  type="number"
                  v-model="item.quantity"
                  @blur="checkQuantity(item)"
                />
                <button @click="decrementQuantity(index)">-</button>
              </div>
              <p>₱{{ item.price }}</p>
              <div class="action-btn">
                <button @click="removeBook(index)">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="check-out-con">
        <p>
          Total ({{ countItem }} item): <span>₱{{ totalCost }}</span>
        </p>
        <button>Check Out</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    removeBook(index) {
      this.$store.dispatch("removeItem", index);
    },
    incrementQuantity(index) {
      this.$store.getters.cartList[index].quantity += 1;
    },
    decrementQuantity(index) {
      let item = this.$store.getters.cartList[index];

      if (item.quantity > 1) item.quantity -= 1;
    },
    checkQuantity(item) {
      if (item.quantity < 0 || item.quantity == 0) item.quantity = 1;
    },
  },
  computed: {
    countItem() {
      return this.$store.getters.cartList.length;
    },
    cartList() {
      return this.$store.getters.cartList;
    },
    totalCost() {
      return this.$store.getters.totalCost;
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
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
}

#cart .check-con,
#cart .cart-header {
  display: flex;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
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
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
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

#cart .quantity-con button:first-child {
  border-radius: 4px 0 0 4px;
}

#cart .quantity-con button:last-child {
  border-radius: 0 4px 4px 0;
}

#cart .action-btn button {
  background: var(--global-red);
  color: var(--global-text);
  border-radius: 4px;
  padding: 10px 20px;
}

#cart .check-out-con {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  position: fixed;
  width: calc(100% - 80px);
  left: 40px;
  right: 40px;
  bottom: 0;
  align-items: center;
  padding: 20px;
  background: var(--global-text);
}

#cart .check-out-con button {
  padding: 10px 20px;
  background: var(--global-purple);
  color: var(--global-text);
  border-radius: 4px;
}

#cart .check-out-con:before {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
  content: "";
  height: 1.25rem;
  left: 0;
  position: absolute;
  top: -1.25rem;
  width: 100%;
}
</style>
