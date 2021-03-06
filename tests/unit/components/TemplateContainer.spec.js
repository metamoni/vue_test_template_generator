import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TemplateContainer from '@/components/TemplateContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
const copyTemplate = jest.fn();

describe('TemplateContainer.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TemplateContainer, {
      localVue,
      store: {
        state: {
          name: 'ButterRobot',
        },
        subscribe: () => jest.fn(),
      },
      methods: {
        copyTemplate,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders a container with the generated template and content editable', () => {
    const container = wrapper.find('#generated-template');

    expect(container.exists()).toBe(true);
    expect(container.attributes('contenteditable')).toBe('true');
  });

  it('renders given component name in the template', () => {
    expect(wrapper.findAll('span.component-name').at(0).text()).toBe('ButterRobot');
  });

  it('renders an Example component', () => {
    expect(wrapper.contains('example-stub')).toBe(true);
  });

  it('renders a Context component', () => {
    expect(wrapper.contains('context-stub')).toBe(true);
  });

  it('renders Copy button', () => {
    expect(wrapper.find('button').text()).toBe('COPY');
  });

  xit('calls copyTemplate method when button is clicked', () => {
    wrapper.find('button').trigger('click');

    expect(copyTemplate).toHaveBeenCalled();
  });
});
