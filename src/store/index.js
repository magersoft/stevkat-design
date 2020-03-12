import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portfolio: []
  },
  getters: {
    portfolio: state => state.portfolio
  },
  mutations: {
    setPortfolio(state, payload) {
      const items = [];
      Object.keys(payload).map(key => {
        items.push({ ...payload[key], id: key });
      });
      state.portfolio = items;
    },
    addPortfolio(state, payload) {
      state.portfolio.push(payload);
    },
    removePortfolio(state, id) {
      state.portfolio = state.portfolio.filter(item => item.id !== id);
    }
  },
  actions: {
    async fetchPortfolio({ commit }) {
      try {
        const { data } = await axios.get('portfolio.json');
        if (data) {
          commit('setPortfolio', data);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async addPortfolio({ commit }, payload) {
      try {
        await axios.post('portfolio.json', payload);
        commit('addPortfolio', payload);
      } catch (e) {
        console.error(e);
      }
    },
    async removePortfolio({ commit }, id) {
      try {
        await axios.delete(`portfolio/${id}.json`);
        commit('removePortfolio', id)
      } catch (e) {
        console.error(e)
      }
    }
  },
  modules: {
  }
})
