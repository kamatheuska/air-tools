<template>
  <div class="container-grid-no-heading">
    <div class="box register-grid">
      <form @submit.prevent="registerUser">
        <h1>Registrar usuario</h1>
        <div>
          <input
            placeholder="Nombre"
            type="text"
            :value="user.name"
            @input="valueUpdated">
        </div>
        <div>
          <input
            placeholder="Teléfono"
            type="number"
            :value="user.phone"
            @input="valueUpdated">
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            :value="user.email"
            @input="valueUpdated">
        </div>
        <div>
          <input
            placeholder="Contraseña"
            type="password"
            :value="user.password"
            @input="valueUpdated">
        </div>
        <div class="btn-register">
          <button type="submit" >REGISTRARSE</button>
          <p v-if="isRegistered && !registrationError">
            Su usuario ha sido registrado
          </p>
          <p v-if="!isRegistered && registrationError">
            Inténtalo de nuevo.
          </p>
        </div>
      </form>
    </div>
    <div class="registered">
      <h4>¿Ya estás registrado? Haz clic
        <router-link to="/login"> aqui</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        phone: '',
        name: '',
      },
    };
  },
  computed: {
    ...mapGetters([
      'isRegistered',
      'registrationError',
    ]),
  },
  methods: {
    ...mapActions({
      register: 'registerUser',
    }),
    ...mapMutations({
      update: 'UPDATE_USER_PROP',
    }),
    registerUser() {
      this.register().then(() => {
        this.$router.push('login');
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
.register-grid {
  height: 100%;
  width: 100%;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
}
.register-grid form {
  padding: 2rem;
}
.registered {
  grid-column: 2 / span 1;
  grid-row: 3 / span 4;
  text-align: center;
}
</style>

