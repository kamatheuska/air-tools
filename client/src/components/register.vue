<template>
  <div class="register-grid">
    <div class="form-container">
      <h1>Registrar usuario</h1>
      <input type="email" name="email" v-model="email">
      <input type="password" name="password" v-model="password">
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      // eslint-disable-next-line
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style>
.register-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.form-container {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;

}
.form-container > * {
  display: block;
  margin: 2rem;
}
</style>
