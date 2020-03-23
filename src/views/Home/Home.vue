<template>
  <div>
    <app-header />
    <section id="home" class="main">
      <div class="container">
        <div class="title">
          <h1>Hello I'am <br />UI/UX Designer</h1>
          <p>Привет, я Катанаев Евгений. Я дизайнер интерфейсов мобильных и desktop платформ, базирующийся в Москве и Московской области.</p>
          <a href="#portfolio">
            <button class="custom-button">Portfolio</button>
          </a>
        </div>
      </div>
    </section>
    <section id="portfolio" class="portfolio">
      <div class="container container--fluid">
        <div class="row align-items-center justify-end">
          <div class="offset-xl-1 col-xl-3 col-lg-4">
            <div class="portfolio-title">
              <h2>Portfolio</h2>
              <p>Представляю Вам свои работы. Здесь собраны как творческие концепты, так и интерфейсы созданные в "боевых" условиях.</p>
              <button class="custom-button" @click="$router.push('/portfolio')">View all</button>
            </div>
          </div>
          <div class="col-lg-8">
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
        <p>Email: <span>j.a.dog2555@gmail.com</span></p>
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
