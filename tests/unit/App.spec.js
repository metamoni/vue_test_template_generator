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

  it('renders ComponentDetailForm component', () => {
    expect(wrapper.find('componentdetailform-stub').exists()).toBe(true);
  });
});
