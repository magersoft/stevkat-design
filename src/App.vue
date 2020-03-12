<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~reset-css/reset.css';
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css?family=Blinker&display=swap');
@import './theme/token';

html {
  overflow: auto!important;
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
}

.align-items-center {
  align-items: center;
}

a {
  font-weight: 600;
}

button {
  font-weight: normal;
}

button, a {
  font-family: Blinker, Roboto, sans-serif;
}
</style>
