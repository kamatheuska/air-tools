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
  font-family: 'Montserrat', Helvetica ,sans-serif;
}
* {
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

/* Main Grid */

.container-grid-no-heading {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
}
.container-grid {
  height: 100%;
  width: 100%;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(12, 1fr);
}
.container-grid .header {
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
}
.container-grid .content {
  grid-column: 3 / span 8;
  grid-row: 3 / span 1;
  justify-self: stretch;
}
.container-grid footer {
  grid-column: 1 / -1;
  grid-row: 5 / span 1
}
.box {
  height: 100%;
  width: 100%;
  border: #ddd solid 1px;
  padding: 3rem;
}
.box.login-grid form > *, .box.register-grid form > * {
  margin: 2rem;
}
.content {
  height: 100%;
  width: 100%;
}

/* Grid for the home.vue component */

.content-welcome {
  width: 100%;
  height: 100%;
  grid-column: 2 / -2;
  grid-row: 3 / span 9;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-gap: 1rem;
}
.home-image {
  grid-column: 1 / span 5;
  grid-row: 1 / span 7;
  align-self: end;
}
.content-welcome h1 {
  font-size: 4rem;
  margin-top: 0;
  margin-bottom: 1rem;
  grid-column: 6 / -1;
  grid-row: 1 / span 2;
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 900;
}
.content-welcome .intro {
  grid-column: 6 / -1;
  grid-row: 3 / -1 ;
  text-align: justify;
}
.content-welcome .btn-primary {
  grid-column: 1 / span 2
}
.content-welcome .btn-secondary {
  grid-column: 4 / span 2
}

/*=========================*\
  #TEXT
\*=========================*/
.form-log-message {
  text-align: center;
  padding: 2px;
  border-radius: 5px;
  background-color: #aa0000;
  color: white;
  font-weight: 900;
  opacity: 0.6;
}

/*=========================*\
  #TAGS
\*=========================*/
.container-grid-no-heading div h4 a {
  color: #990000;
  font-weight: 900;
}
a {
  text-decoration: none;
  color: inherit;
}
.button {
  font-size: 1.2rem;
  height: 4.6rem;
  width: 18rem;
  border-radius: 0.5rem;
  background: #01848B;
  color: white;
  font-weight: 900;
  border: none;
}
.btn-primary {
  background: #01848b;
}
.btn-secondary {
  background: #9b6298;
}
.btn-end{
  background: #6d6d6d;
}
.btn-hover {
  opacity: 0.7;
  color: black;
}
.content .button {
  width: 100%;
  height: 3rem;
}
label {
  font-size: 10px;
  font-weight: 900;
  color: black;
}
input  {
  border-style: none;
  border: 1px #ddd solid;
  position: relative;
  width: 100%;
  height: 2.8rem;
  padding: 2px;
}

/*=========================*\
  #IMAGES
\*=========================*/

.home-image img {
  max-width: 100%;
  height: auto;
}
/*=========================*\
  #MOBILE
\*=========================*/

@media only screen and (max-width: 667px) {
  .container-grid {
    grid-template-columns: repeat(10, 1fr);
  }
  .container-grid .header {
    grid-template-columns: repeat(10, 1fr);
    grid-column: 1 / -1;
  }
  .content-welcome {
    display: grid;
    grid-row: 2 / -1;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 1rem;
    justify-items: center;
  }
  .content-welcome h1 {
    margin-top: 1.5rem;
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
  .home-image {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
  }
  .content-welcome .btn-primary {
    grid-column: 2 / span 6;
    grid-row: 3 / span 1 ;
  }
  .content-welcome .btn-secondary {
    grid-column: 2 / span 6;
    grid-row: 4 / span 1 ;
  }
  .content-welcome .intro {
    grid-column: 1 / -1;
    grid-row: 5 / -1 ;
  }
  .container-grid .header .button {
    width: fit-content;
    color: #01848B;
    border: #01848B solid 1px;
    border-radius: 0;
    background: none;
    grid-column: 8 / span 2;
  }
}

</style>
