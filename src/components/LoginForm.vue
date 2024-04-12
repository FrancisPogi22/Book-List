<template>
  <section id="login">
    <div class="wrapper">
      <div class="login-con">
        <div class="login-form-con">
          <h2>Login</h2>
          <form @submit.prevent="login()">
            <div class="field-con">
              <input type="text" placeholder="Email Address" v-model="email" />
              <span class="error">{{ emailError }}</span>
            </div>
            <div class="field-con">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
              />
              <span class="error">{{ passwordError }}</span>
            </div>
            <div class="btn-con">
              <RouterLink to="/register" class="register"
                >Don't have account? Register here</RouterLink
              >
              <button type="submit" class="btn">Login</button>
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
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    validateForm() {
      let isValid = true;

      this.emailError = "";
      this.passwordError = "";
      this.emailError = !this.email
        ? "Email is required."
        : !/\S+@\S+\.\S+/.test(this.email)
        ? "Please enter a valid email."
        : "";
      this.passwordError = !this.password
        ? "Password is required."
        : this.password.length < 6
        ? "Password must be at least 6 characters long."
        : "";

      isValid = isValid && !this.emailError && !this.passwordError;

      return isValid;
    },
    login() {
      if (!this.validateForm()) return;

      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          if (!result) {
            this.$notify({
              title: "Online Bookstore Application",
              type: "error",
              text: "Incorrect Credentials.",
            });
            this.password = "";
          }
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

#login .login-con form button:hover {
  background: #5025d1;
}

#login .login-con form .error {
  font-size: 10px;
  color: #ef4444;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
}

#login .login-con .field-con {
  text-align: left;
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
  width: 100%;
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
  color: var(--global-purple);
  font-style: italic;
}

#login .btn-con {
  display: flex;
  justify-content: space-between;
}
</style>
