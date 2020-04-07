import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentName: 'DeepThought',
    example: 'should calculate the meaning of life',
    context: 'when answer is not known',
  },
  mutations: {
    updateComponentName(state, component) {
      state.componentName = component;
    },
    updateExample(state, example) {
      state.example = example;
    },
    updateContext(state, context) {
      state.context = context;
    },
  },
});
