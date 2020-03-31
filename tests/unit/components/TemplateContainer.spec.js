import { shallowMount } from '@vue/test-utils';
import TemplateContainer from '@/components/TemplateContainer.vue';

describe('TemplateContainer.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TemplateContainer);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders a textarea for the generated template', () => {
    expect(wrapper.find('#generated-template').exists()).toBe(true);
  });
});
