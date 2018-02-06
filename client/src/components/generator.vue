<template>
  <div class="container-grid">
    <app-header id="app-header"></app-header>
    <form class="box content generator-grid">
      <label for="cliente">Ingresa el nombre del huésped: </label>
      <input type="text" v-model="input.cliente" id="cliente">
      <label>Idioma:</label>

      <input type="radio" id="español" value="spa" v-model="input.idioma" checked>
      <label for="español">Español</label>
      <input type="radio" id="ingles" value="eng" v-model="input.idioma">
      <label for="ingles">Ingles</label>

      <label>Lugar:</label>
      <input type="radio" id="ctg" value="ctg" v-model="input.lugar" checked>
      <label for="ctg">Cartagena</label>
      <input type="radio" id="bcn" value="bcn" v-model="input.lugar">
      <label for="bcn">Barcelona</label>
      <button @click.prevent="onSubmit">Generar</button>
    </form>
    <app-footer id="app-footer"></app-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        cliente: '',
        lugar: 'ctg',
        idioma: 'eng',
      },
      logMsg: '',
    };
  },
  methods: {
    onSubmit() {
      return undefined;
    },
    logInput() {
      this.logMsg = `Generando plantillas en ${this.input.idioma} para el huésped ${this.input.cliente} en ${this.input.lugar}...`;
      // eslint-disable-next-line
      console.log(this.logMsg);
      return this.logMsg;
    },
  },
};
</script>

<style>
form.generator-grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /*grid-template-rows: repeat(4)*/
  grid-gap: 1.8rem;
  align-items: stretch;
}
form.generator-grid label:nth-child(1) {
  grid-column: 1 / -1;
}
form.generator-grid #cliente {
  grid-column: 1 / span 6;
}
form.generator-grid label:nth-child(3) {
  grid-column: 1 / -1;
}
form.generator-grid input#español {
  grid-column: 1 / span 1;
}
form.generator-grid label:nth-child(5) {
  grid-column: 2 / span 1;
}
form.generator-grid input#ingles {
  grid-column: 3 / span 1;
}
form.generator-grid label:nth-child(7) {
  grid-column: 4 / span 1;
}
form.generator-grid label:nth-child(8) {
  grid-column: 1 / -1;
}
form.generator-grid input#ctg {
  grid-column: 1 / span 1;
}
form.generator-grid label:nth-child(11) {
  grid-column: 2 / span 1;
}
form.generator-grid input#bcn {
  grid-column: 3 / span 1;
}
form.generator-grid label:nth-child(13) {
  grid-column: 4 / span 1;
}
form.generator-grid button {
  grid-column: 1 / -1;
}
.generator-grid label {
  font-size: 1.6rem;
  font-weight: 100;
}
</style>
