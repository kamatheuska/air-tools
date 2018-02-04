<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

};
</script>

<style>

/*=========================*\
  #RESET
\*=========================*/
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-family: 'Montserrat', Helvetica,Arial,sans-serif;
}
html * {
  box-sizing: border-box;
}
#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

/*=========================*\
  #HEADINGS
\*=========================*/
h1 {
  font-size: 3rem;
  grid-column: 2 / span 2;
}
h2 {
  font-size: 2.6rem;
}
h3 {
  font-size: 1.9rem;
}
h4 {
  font-size: 1.5rem;
}


/*=========================*\
  #CONTAINERS AND GRIDS
\*=========================*/

/* Grid in App.vue */
.grid {
  height: 100%;
  width: 100%;
  grid-gap: 5rem;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: 10rem 3rem auto 2rem 10rem;
}
#app-header {
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
}
.container {
  grid-column: 3 / span 8;
  grid-row: 3 / span 1;
}
#app-footer {
  grid-column: 1 / span 12;
  grid-row: 5 / span 1
}
.box {
  border: #ddd solid 1px;
  padding: 3rem;
}
.header {
  text-align: center;
}


/*=========================*\
  #TAGS
\*=========================*/
a{
  text-decoration: none;
  color: inherit;
}
button {
  font-size: 2rem;
  letter-spacing: 0.55rem;
  height: 4.6rem;
  width: 18rem;
  border-radius: 0.5rem;
  background: #01848B;
  color: white;
  font-weight: 900;
  border: none;
}


</style>

