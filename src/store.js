import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    componentName: 'ComponentName',
    example: 'should do something',
    context: 'when prop does not match requirements',
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
