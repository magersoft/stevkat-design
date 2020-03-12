<template>
  <div>
    <router-view />
  </div>
</template>

<script>
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

.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1264px) {
    max-width: 1185px;
  }

  @media (min-width: 960px) {
    max-width: 900px;
  }
}
</style>
