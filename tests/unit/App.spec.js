import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders Form component', () => {
    expect(wrapper.find('form-stub').exists()).toBe(true);
  });
});
