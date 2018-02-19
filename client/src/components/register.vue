 <template>
  <div class="container-grid-no-heading">
    <div class="box register-grid">
      <form class= "" @submit.prevent="registerUser">
        <h1>Registrar usuario</h1>
        <div>
          <input placeholder="Nombre" type="text" :value="user.name" @input="valueUpdated">
        </div>
        <div>
          <input placeholder="Teléfono" type="number" :value="user.phone" @input="valueUpdated">
        </div>
        <div>
          <input placeholder="Email" type="email" :value="user.email" @input="valueUpdated">
        </div>
        <div>
          <input placeholder="Contraseña" type="password" :value="user.password" @input="valueUpdated">
        </div>
        <div class="btn-register">
          <button type="submit" >Continuar</button>
          <p v-if="isRegistered" >Su usuario ha sido registrado</p>
        </div>
      </form>
    </div>
    <div class="registered">
      <h4>¿Ya estás registrado? Haz clic <router-link to="/login">aqui</router-link></h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
    ]),
  },
  methods: {
    valueUpdated(e) {
      let payload = {
        type: e.target.getAttribute('type'),
        value: e.target.value,
      };

      this.$store.commit('updateUserProp', payload);
    },
    routeToLogin() {
      console.log(this.isRegistered);
      if (this.isRegistered) {
        this.$router.push('login');
      }
    },
    registerUser() {
      let router = this.$router;
      this.$store.dispatch('registerUser', this.user).then(function() {
        router.push('login');
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

