<template>
  <div class="container-grid">
    <app-header></app-header>
    <div class="content-welcome">
      <h1>Bienvenido a nuestra web</h1>
      <div class="intro">
        <p><strong>Earthbnb Tools</strong> es una web que contiene una serie de herramientas para manejar huéspedes en plataformas de alquiler de habitaciones o residencias de corta estancia. Entre las diferentes cosas que puedes hacer aqui están:</p>
        <ul>
          <li
            v-for="tool in tools"
            :key="tool.id">
            {{ tool.info }}
          </li>
        </ul>
      </div>
      <div class="home-image">
        <img src="../assets/houses3.png">
      </div>
      <button
        class="button btn-primary"
        v-bind:class="hoverClassPrim"
        @mouseover="handleBtnHover($event)"
        @mouseout="handleBtnHover($event)"
        @click="goToRegister"
        >
        REGISTRATE
      </button>
      <button
        class="button btn-secondary"
        v-bind:class="hoverClassSec"
        @mouseover="handleBtnHover($event)"
        @mouseout="handleBtnHover($event)"
        @click="goToLogin">
        CONECTA CON TU EQUIPO
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tools: [
        {
          id: 1,
          info: 'Agregar huéspedes y guardar su información',
        },
        {
          id: 2,
          info: 'Crear plantillas únicas para cada huésped',
        },
        {
          id: 3,
          info: 'Tener mensajes en varios idiomas',
        },
      ],
      btnPrimary: {
        hover: false,
        active: false,
      },
      btnSecondary: {
        hover: false,
        active: false,
      },
    };
  },
  computed: {
    hoverClassPrim() {
      return {
        'btn-hover': this.btnPrimary.hover,
      };
    },
    hoverClassSec() {
      return {
        'btn-hover': this.btnSecondary.hover,
      };
    },
  },
  methods: {
    handleBtnHover(e) {
      const classes = e.target.classList;
      for (let i = 0; i < classes.length; i += 1) {
        if (classes[i] === 'btn-primary') {
          this.btnPrimary.hover = !this.btnPrimary.hover;
        } else if (classes[i] === 'btn-secondary') {
          this.btnSecondary.hover = !this.btnSecondary.hover;
        }
      }
    },
    goToRegister() {
      this.$router.push('register');
    },
    goToLogin() {
      this.$router.push('login');
    },
  },
};

</script>

<style>

</style>

