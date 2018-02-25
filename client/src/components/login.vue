/* eslint-disable */
<template>
  <div class="container-grid-no-heading">
    <div class="box login-grid">
      <div>
        <h1>Iniciar sesión</h1>
        <div class="to_register">
          <h4>¿No estás registrado aún? Haz click
            <router-link to="/register">
              <span>aquí.</span>
            </router-link>
          </h4>
        </div>
        <h4>
          <router-link to="/generator">Ir a la app</router-link>
        </h4>
      </div>
      <form @submit.prevent="loginUser">
        <div>
          <input
            placeholder="Email"
            type="email"
            :value="credentials.email"
            @input="valueUpdated" >
        </div>
        <div>
          <input
            placeholder="Contraseña"
            type="password"
            :value="credentials.password"
            @input="valueUpdated">
        </div>
        <div class="btn-login">
          <button class="button" type="submit">INGRESAR</button>
          <p class="form-log-message"
             v-if="!auth && loginError">
             Su email o contraseña son incorrectos
          </p>
          <!-- <p v-if="isRegistered">Some error at login</p>-->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      auth: 'isAuthenticated',
      loginError: 'loginError',
    }),
  },
  methods: {
    ...mapMutations({
      update: 'UPDATE_CREDENTIALS',
    }),
    ...mapActions({
      login: 'loginUser',
    }),
    loginUser() {
      this.login().then(() => {
        this.$router.push('generator');
      }).catch(err => err);
    },
    valueUpdated(e) {
      this.update({
        type: e.target.getAttribute('type'),
        value: e.target.value,
      });
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
.login-grid div:first-child {
  margin: 2rem;
}
</style>

