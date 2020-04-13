import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Example from '@/components/Example.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;

describe('Example.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Example, {
      localVue,
      store: {
        state: {
          examples: [
            'should do this',
            'should do that',
            'should do the other thing',
          ],
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders an article element for each example', () => {
    expect(wrapper.findAll('article').length).toBe(3);
  });

  it('renders given example data from store', () => {
    expect(wrapper.findAll('span.example').at(0).text()).toBe('should do this');
    expect(wrapper.findAll('span.example').at(1).text()).toBe('should do that');
    expect(wrapper.findAll('span.example').at(2).text()).toBe('should do the other thing');
  });
});
