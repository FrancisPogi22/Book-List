<template>
  <section id="login">
    <div class="wrapper">
      <div class="login-con">
        <div class="login-form-con">
          <h2>Login</h2>
          <form @submit.prevent="login()">
            <input type="text" placeholder="email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <div class="btn-con">
              <RouterLink to="/register" class="register"
                >Don't have account? register here</RouterLink
              >
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    if (!localStorage.getItem("accounts"))
      localStorage.setItem("accounts", JSON.stringify([]));
  },
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
#login .wrapper {
  max-width: 1640px;
  width: 100%;
}

#login .login-con {
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#login .login-form-con {
  border: 1px solid var(--global-gray);
  width: 500px;
  padding: 20px;
}

#login .login-con form {
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

#login .login-con form input {
  padding: 10px;
  border: 1px solid var(--global-gray);
  border-radius: 4px;
}

#login .login-con form button {
  padding: 10px;
  background: var(--global-purple);
  color: var(--global-text);
  border-radius: 4px;
}

#login .register {
  font-style: italic;
}

#login .btn-con {
  display: flex;
  justify-content: space-between;
}
</style>