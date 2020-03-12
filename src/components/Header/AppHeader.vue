<template>
  <header class="header">
    <router-link to="/">
      <img src="../../assets/logo.svg" alt="">
    </router-link>
    <div class="menu">
      <span><router-link to="/" exact>Home</router-link></span>
      <span><router-link to="/#portfolio">Portfolio</router-link></span>
      <span><router-link to="/#contacts">Contact</router-link></span>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './Header';
</style>
