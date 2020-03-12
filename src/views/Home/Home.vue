<template>
  <div>
    <app-header />
    <section id="home" class="main">
      <div class="container">
        <div class="title">
          <h1>Hello I'am <br />UI/UX Design</h1>
          <p>Долго. Дорого. <span style="color: red">Ахуенно!</span></p>
          <a href="#portfolio">
            <button class="custom-button">Portfolio</button>
          </a>
        </div>
      </div>
    </section>
    <section id="portfolio" class="portfolio">
      <div class="container container--fluid">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="portfolio-title">
              <h2>Portfolio</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facilis, nemo perferendis qui quos repudiandae.</p>
              <button class="custom-button" @click="$router.push('/portfolio')">All items</button>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <app-post
                v-for="(item, index) of mainPortfolio" :key="index"
                :portfolio-item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts" class="contacts">
      <div class="container">
        <h2>Contact with me</h2>
        <p>Social: <span>@StEvKat</span></p>
        <p>Email: <span>email@email.com</span></p>
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from '../../components/Header/AppHeader';
import AppPost from '../../components/Post/AppPost';
import AppFooter from '../../components/Footer/AppFooter';

export default {
  components: {
    AppHeader,
    AppPost,
    AppFooter
  },
  computed: {
    ...mapGetters(['portfolio']),
    mainPortfolio() {
      return this.portfolio.filter(item => item.isHome)
    }
  },
  async mounted() {
    await this.fetchPortfolio();
  },
  updated() {
    console.log('UPDATED')
  },
  methods: {
    ...mapActions(['fetchPortfolio'])
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
