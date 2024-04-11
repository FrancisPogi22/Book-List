<template>
  <section id="register">
    <div class="wrapper">
      <div class="register-con">
        <div class="register-form-con">
          <h2>Register</h2>
          <form @submit.prevent="register()">
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
              <RouterLink to="/" class="login"
                >Already have account? Login here</RouterLink
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
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    validateForm() {
      let isValid = true,
        accounts = JSON.parse(localStorage.getItem("accounts"));

      this.emailError = "";
      this.passwordError = "";
      this.emailError = !this.email
        ? "Email is required."
        : !/\S+@\S+\.\S+/.test(this.email)
        ? "Please enter a valid email."
        : accounts.find((account) => account.email == this.email)
        ? "Email already taken."
        : "";
      this.passwordError = !this.password
        ? "Password is required."
        : this.password.length < 6
        ? "Password must be at least 6 characters long."
        : "";

      isValid = isValid && !this.emailError && !this.passwordError;

      return isValid;
    },
    register() {
      if (!this.validateForm()) return;

      let accounts = JSON.parse(localStorage.getItem("accounts"));

      accounts.push({ email: this.email, password: this.password });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      this.$router.push({ name: "login" });
      this.$notify({
        title: "Online Bookstore Application",
        type: "success",
        text: "Account registered successfully.",
      });
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

#register .register-con form .error {
  font-size: 10px;
  color: #ef4444;
  font-style: italic;
  font-family: "Montserrat", sans-serif;
}

#register .register-con .field-con {
  text-align: left;
}

#register .register-con form input {
  padding: 10px;
  border: 1px solid var(--global-gray);
  border-radius: 4px;
  width: 100%;
}

#register .register-con form button:hover {
  background: #5025d1;
}

#register .register-con form button {
  padding: 10px;
  background: var(--global-purple);
  color: var(--global-text);
  border-radius: 4px;
}

#register .login {
  color: var(--global-purple);
  font-style: italic;
}

#register .btn-con {
  display: flex;
  justify-content: space-between;
}
</style>
