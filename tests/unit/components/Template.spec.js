import { shallowMount } from '@vue/test-utils';
import Template from '@/components/Template.vue';

describe('Template.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Template);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders a textarea for the generated template', () => {
    expect(wrapper.find('#generated-template').exists()).toBe(true);
  });
});
