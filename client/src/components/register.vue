 <template>
  <div class="container-grid-no-heading">
    <div class="box register-grid">
      <h1>Registrar usuario</h1>
    <div>
        <label for="">Email: </label><br>
        <input type="email" :value="user.email">
      </div>
      <div>
        <label for="">Password: </label><br>
        <input type="password" :value="user.password">
      </div>
      <div class="btn-register">
       <button @click.prevent="registerUser">Continuar</button>
       <p v-if="isRegistered" >Su usuario ha sido registrado</p>
      </div>
    </div>
    <div class="registered">
      <h4>¿Ya estás registrado? Haz clic <router-link to="/login">aqui</router-link></h4>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    getUserFromInput() {
    
    },
    ...mapGetters([
      'isRegistered',
    ]),
  },
  methods: {
    registerUser() {
      this.$store.dispatch('registerUser', this.user);
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

