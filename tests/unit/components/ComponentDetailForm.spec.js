import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ComponentDetailForm from '@/components/ComponentDetailForm.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper;
const updateName = jest.fn();
const submitExample = jest.fn();
const submitContext = jest.fn();

describe('ComponentDetailForm.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ComponentDetailForm, {
      localVue,
      store: {
        state: {},
      },
      methods: {
        updateName,
        submitExample,
        submitContext,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders three inputs', () => {
    expect(wrapper.findAll('input').length).toBe(3);
  });

  it('calls updateName on component name input change', () => {
    wrapper.find('#component-name').trigger('keyup');

    expect(updateName).toHaveBeenCalled();
  });

  it('renders example form', () => {
    expect(wrapper.contains('#example-form')).toBe(true);
  });

  it('calls submitExample on example form submit', () => {
    wrapper.find('#example-form').trigger('submit.prevent');

    expect(submitExample).toHaveBeenCalled();
  });

  it('renders context form', () => {
    expect(wrapper.contains('#context-form')).toBe(true);
  });

  it('calls submitContext on context form submit', () => {
    wrapper.find('#context-form').trigger('submit.prevent');

    expect(submitContext).toHaveBeenCalled();
  });
});
