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

  it('renders component detail form', () => {
    expect(wrapper.find('componentdetailform-stub').exists()).toBe(true);
  });

  it('renders template container', () => {
    expect(wrapper.find('templatecontainer-stub').exists()).toBe(true);
  });
});
