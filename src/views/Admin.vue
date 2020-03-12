<template>
  <v-app>
    <v-app-bar
            app
            color="primary"
            dark
    >
      <div class="d-flex align-center">
        Chiki Briki
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <div class="portfolio">
        <form class="add" @submit="onSubmit">
          <v-text-field v-model="title" label="Title" />
          <v-text-field v-model="description" label="Description" />
          <v-file-input multiple label="small image" @change="uploadSmallImage"></v-file-input>
          <v-file-input multiple label="big image" @change="uploadBigImage"></v-file-input>
          <v-checkbox label="Show in Home page" v-model="isHome" />
          <v-btn type="submit">Add portfolio</v-btn>
        </form>
        <ul>
          <li v-for="(item, key) of portfolio" :key="portfolio.id" class="item">
            <span><strong>{{key + 1}}.</strong>  {{ item.title }}</span>
            <div>
              <span v-if="item.isHome">isHome</span>
              <v-btn color="red darken-2" dark @click="onRemove(item.id)">
                X
              </v-btn>
            </div>
          </li>
        </ul>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    title: '',
    description: '',
    smallImage: '',
    image: '',
    isHome: false
  }),
  computed: {
    ...mapGetters(['portfolio'])
  },
  created() {
    this.fetchPortfolio();
  },
  methods: {
    ...mapActions(['fetchPortfolio', 'removePortfolio']),
    async onSubmit(event) {
      event.preventDefault();
      try {
        const portfolio = {
          title: this.title,
          description: this.description,
          smallImage: this.smallImage,
          image: this.image,
          isHome: this.isHome
        };
        await this.$store.dispatch('addPortfolio', portfolio);
        this.resetForm();
      } catch (e) {
        console.error(e);
      }
    },
    resetForm() {
      this.title = '';
      this.smallImage = '';
      this.description = '';
      this.image = '';
    },
    async uploadImage(file) {
      if (file) {
        const formData = new FormData();
        formData.append('file', file[0]);
        formData.append('api_key', '754293116941949');
        formData.append('upload_preset', 'sed4duz5');
        formData.append('timestamp', String(Date.now() / 1000));
        const { data: { secure_url } } = await axios.post('https://api.cloudinary.com/v1_1/magersoft/image/upload', formData);
        return secure_url;
      }
    },
    async uploadSmallImage(file) {
      this.smallImage = await this.uploadImage(file);
    },
    async uploadBigImage(file) {
      this.image = await this.uploadImage(file);
    },
    onRemove(id) {
      this.removePortfolio(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  width: 600px;
  margin: 1rem auto;

  ul {
    padding: 0;
  }

  .add {
    margin-bottom: 2rem;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;

    span {
      font-size: 20px;
      margin-right: 2rem;
    }
    button {
      margin-left: 1rem;
    }
  }
}
</style>
