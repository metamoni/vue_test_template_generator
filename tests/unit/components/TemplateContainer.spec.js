import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TemplateContainer from '@/components/TemplateContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
let wrapper;
let store;
let copyTemplate;

describe('TemplateContainer.vue', () => {
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        componentName: 'TestComponent',
        example: 'passes all tests',
        context: 'when test example exists',
      },
    });

    copyTemplate = jest.fn();

    wrapper = shallowMount(TemplateContainer, {
      localVue,
      store,
      methods: {
        copyTemplate,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders a container with the generated template', () => {
    expect(wrapper.find('#generated-template').exists()).toBe(true);
  });

  it('renders given component name in the template', () => {
    expect(wrapper.findAll('span.component-name').at(0).text()).toBe('TestComponent');
  });

  it('renders given example description in the template', () => {
    expect(wrapper.findAll('span.example').at(0).text()).toBe('passes all tests');
  });

  it('renders given context description in the template', () => {
    expect(wrapper.findAll('span.context').at(0).text()).toBe('when test example exists');
  });

  it('renders Copy to clipboard button', () => {
    expect(wrapper.find('button').text()).toBe('Copy to clipboard');
  });

  it('calls copyTemplate method when button is clicked', () => {
    wrapper.find('button').trigger('click');

    expect(copyTemplate).toHaveBeenCalled();
  });
});
