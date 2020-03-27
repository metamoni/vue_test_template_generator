import { shallowMount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Form);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders three inputs', () => {
    expect(wrapper.findAll('input').length).toBe(3);
  });
});
