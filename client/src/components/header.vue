<template>
  <div class="header">
    <h1>Earthbnb <span>tools</span></h1>
    <button
      class="button btn-primary"
      v-if="!auth"
      v-bind:class="hoverClassPrim"
      @mouseover="handleBtnHover($event)"
      @mouseout="handleBtnHover($event)"
      @click="login">
      LOGIN
    </button>
    <button
      class="button btn-end"
      v-else
      v-bind:class="hoverClassEnd"
      @mouseover="handleBtnHover($event)"
      @mouseout="handleBtnHover($event)"
      @click="logout">
      <p>LOGOUT</p>
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      btnPrimary: {
        hover: false,
        active: false,
      },
      btnEnd: {
        hover: false,
        active: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      auth: 'isAuthenticated',
    }),
    hoverClassPrim() {
      return {
        'btn-hover': this.btnPrimary.hover,
      };
    },
    hoverClassEnd() {
      return {
        'btn-hover': this.btnEnd.hover,
      };
    },
  },
  methods: {
    handleBtnHover(e) {
      const classes = e.target.classList;
      for (let i = 0; i < classes.length; i += 1) {
        if (classes[i] === 'btn-primary') {
          this.btnPrimary.hover = !this.btnPrimary.hover;
        } else if (classes[i] === 'btn-end') {
          this.btnEnd.hover = !this.btnEnd.hover;
        }
      }
    },
    login() {
      this.$router.push('login');
    },
    logout() {
      this.$store.dispatch('logoutUser').then(() => {
        this.$router.push('login');
      });
    },
  },
};
</script>

<style>

.header {
  width:100%;
  height: auto;
  text-shadow: 4px 2px 0 #eee;
  color: #01848B;
  font-weight: 100;
  border-bottom: 2px groove #eee;
  /* Here comes the grid */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
}
.header h1 {
  grid-column: 2 / span 5;
  justify-self: left;
}
.header h1 span{
  font-size: 0.6em;
  font-style: italic;
}
.header .button {
  grid-column: 10 / span 2;
  min-width: fit-content;
  width: 11rem;
  align-self: center;
  justify-self: right;
  height: 3.5rem
}
</style>

