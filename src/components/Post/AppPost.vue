<template>
  <div class="col-lg-4 col-sm-6 portfolio-column">
    <div class="portfolio-box">
      <div class="portfolio-thumb">
        <img :src="portfolioItem.smallImage" :alt="portfolioItem.description">
      </div>
      <a :href="portfolioItem.pdf || portfolioItem.image" class="portfolio-link" target="_blank">
        <img src="../../assets/zoom.svg" alt="icon">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolioItem: Object
  }
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
