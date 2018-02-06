<template>
  <div class="container-grid-no-heading">
    <div class="box register-grid">
      <h1>Registrar usuario</h1>
      <div>
        <label>Tu primer nombre:</label><br>
        <input type="text">
      </div>
      <div>
        <label for="">Email: </label><br>
        <input type="email" name="email" v-model="email">
      </div>
      <div>
        <label for="">Password: </label><br>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="btn-register">
       <button @click="register">Continuar</button>
      </div>
    </div>
    <div class="registered">
      <h4>¿Ya estás registrado? Haz clic<router-link to="/">aqui</router-link></h4>
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
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      // eslint-disable-next-line
      console.log(response.data);
    },
  },
};
</script>

<style>
.register-grid {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  padding: 2rem;
}
.registered {
  grid-column: 2 / span 1;
  grid-row: 3 / span 4;
  text-align: center;
}
</style>

