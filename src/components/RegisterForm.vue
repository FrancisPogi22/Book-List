<template>
  <section id="register">
    <div class="wrapper">
      <div class="register-con">
        <div class="register-form-con">
          <h2>Register</h2>
          <form @submit.prevent="register()">
            <input type="text" placeholder="email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <div class="btn-con">
              <RouterLink to="/" class="login"
                >Already have account? login here</RouterLink
              >
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      let accounts = JSON.parse(localStorage.getItem("accounts"));
      accounts.push({ email: this.email, password: this.password });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
#register .wrapper {
  max-width: 1640px;
  width: 100%;
}

#register .register-con {
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#register .register-form-con {
  border: 1px solid var(--global-gray);
  width: 500px;
  padding: 20px;
}

#register .register-con form {
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

#register .register-con form input {
  padding: 10px;
  border: 1px solid var(--global-gray);
  border-radius: 4px;
}

#register .register-con form button {
  padding: 10px;
  background: var(--global-purple);
  color: var(--global-text);
  border-radius: 4px;
}

#register .login {
  font-style: italic;
}

#register .btn-con {
  display: flex;
  justify-content: space-between;
}
</style>