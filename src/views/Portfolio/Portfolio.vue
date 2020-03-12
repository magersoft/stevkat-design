<template>
  <main class="portfolio">
    <app-header />
    <div class="container content">
      <h1>All Portfolio</h1>
      <div class="row">
        <app-post
          v-for="(item, index) of portfolio" :key="index"
          :portfolio-item="item"
        />
      </div>
    </div>
    <app-footer />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from '../../components/Header/AppHeader'
import AppPost from '../../components/Post/AppPost';
import AppFooter from '../../components/Footer/AppFooter';

export default {
  components: {
    AppPost,
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapGetters(['portfolio'])
  },
  mounted() {
    window.scrollTo(0,0);
    this.fetchPortfolio();
  },
  methods: {
    ...mapActions(['fetchPortfolio'])
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
