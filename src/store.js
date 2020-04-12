import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'DeepThought',
    example: 'calculates the meaning of life',
    context: 'when answer not known',
    contexts: [],
    examples: [],
  },
  mutations: {
    updateComponentName(state, component) {
      state.name = component;
    },
    addExample(state, text) {
      state.examples.push(text);
    },
    addContext(state, text) {
      state.contexts.push(text);
    },
  },
});
