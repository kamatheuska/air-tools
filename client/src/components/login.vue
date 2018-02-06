<template>
  <div class="container-grid-no-heading">
    <div class="box login-grid">
      <h1>LOGIN</h1>
      <div class="to_register">
        <h4>No estás registrado aún? Haz click
          <router-link to="/register">
            <span>aqui</span>
          </router-link>
        </h4>
      </div>
      <h4><router-link to="/generator">Ir a la app</router-link></h4>
      <div>
        <label for="">Email: </label><br>
        <input type="email" name="email" v-model="email">
      </div>
      <div>
        <label for="">Password: </label><br>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="btn-login">
       <button @click="login">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // eslint-disable-next-line
      console.log(`User ${this.email} has logged in. Password: ${this.password}`);
    },
  },
};
</script>

<style>
.login-grid {
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

