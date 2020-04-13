import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Context from '@/components/Context.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

describe('Context.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Context, {
      localVue,
      store: {
        state: {
          contexts: ['when the sun goes up', 'when then sun goes down'],
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders an article element for each context', () => {
    expect(wrapper.findAll('article').length).toBe(2);
  });

  it('renders given context data from store', () => {
    expect(wrapper.findAll('span.context').at(0).text()).toBe('when the sun goes up');
    expect(wrapper.findAll('span.context').at(1).text()).toBe('when then sun goes down');
  });
});
