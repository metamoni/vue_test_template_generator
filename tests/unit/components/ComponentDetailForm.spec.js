import { shallowMount } from '@vue/test-utils';
import ComponentDetailForm from '@/components/ComponentDetailForm.vue';

describe('ComponentDetailForm.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ComponentDetailForm);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders three inputs', () => {
    expect(wrapper.findAll('input').length).toBe(3);
  });
});
