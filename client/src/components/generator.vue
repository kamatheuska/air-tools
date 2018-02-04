<template>
  <div class="grid">
    <app-header id="app-header"></app-header>
    <div class="container">
      <form class="grid-generator box">
        <label for="cliente">Ingresa el nombre del huésped: </label>
        <input type="text" v-model="input.cliente" id="cliente">
        <label for="">Idioma</label>
        <div id="idioma-radio">
          <input type="radio" id="español" value="spa" v-model="input.idioma" checked>
          <label for="español">Español</label>
          <input type="radio" id="ingles" value="eng" v-model="input.idioma">
          <label for="ingles">Ingles</label>
        </div>

        <label>Lugar</label>
        <div id="lugar-radio">
          <input type="radio" id="ctg" value="ctg" v-model="input.lugar" checked>
          <label for="ctg">Cartagena</label>
          <input type="radio" id="bcn" value="bcn" v-model="input.lugar">
          <label for="bcn">Barcelona</label>
        </div>

        <button @click.prevent="onSubmit">Generar</button>
      </form>
    </div>
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
form.grid-generator {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr) 5.5rem;
  grid-gap: 3rem;
}
form.grid-generator label:nth-child(1) {
  grid-column: 1 / span 3;
}
form.grid-generator #cliente {
  grid-column: 4 / span 3;
}
form.grid-generator label:nth-child(3) {
  grid-column: 1 / span 3;
}
form.grid-generator div#idioma-radio {
  grid-column: 4 / span 3;
}
form.grid-generator label:nth-child(5) {
  grid-column: 1 / span 3;
}
form.grid-generator div#lugar-radio {
  grid-column: 4 / span 3;
}
form.grid-generator button {
  grid-column: 3 / span 3;
}
</style>
