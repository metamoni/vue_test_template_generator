<template>
  <section>
    <h2>Your template</h2>
    <div id="generated-template" contentEditable="true">
    <button id="copy-button" @click="copyTemplate()">COPY</button>
      import { shallowMount } from '@vue/test-utils';<br/>
      import Vuex from 'vuex';<br/>
      import
      <span class="component-name">
        {{ name }}
      </span> from '@/components/<span class="component-name">{{ name }}.vue</span>';
      <br/>
      <br/>
      const localVue = createLocalVue();<br/>
      localVue.use(Vuex);<br/>
      let wrapper, store;
      <br/>
      <br/>
      describe('<span class="component-name">{{ name }}</span>', () => {
      <br/>
      <span class="indent">beforeEach(() => {</span><br/>
        <span class="double-indent">// store = new Vuex.Store({</span><br/>
        <span class="deep-indent">// state: {</span><br/>
        <span class="deep-indent">// },</span><br/>
        <span class="double-indent">// });</span>
        <br/>
        <br/>
        <span class="double-indent">
          wrapper = shallowMount(<span class="component-name">{{ name }}</span>, {<br/>
          <span class="deep-indent">localVue,</span><br/>
          <span class="deep-indent">store,</span><br/>
          <span class="deep-indent">propsData: {},</span><br/>
          <span class="deep-indent">methods: {}</span><br/>
          <span class="double-indent">});</span>
        </span>
      <br/>
      <span class="indent">});</span>
      <br/>
      <br/>
      <span class="indent">afterEach(() => {</span><br/>
        <span class="double-indent">wrapper.destroy();</span>
        <br/>
        <span class="indent">});</span>
        <br/>
        <Example />
        <Context />
      });
    </div>
  </section>
</template>

<script>
import Context from '@/components/Context.vue';
import Example from '@/components/Example.vue';

export default {
  name: 'TemplateContainer',
  components: {
    Context,
    Example,
  },
  data() {
    return {
      name: this.$store.state.name,
    };
  },
  methods: {
    copyTemplate() {
      const container = document.querySelector('#generated-template');
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(container);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        const button = document.querySelector('#copy-button');
        button.innerHTML = 'DONE';

        setTimeout(() => {
          window.getSelection().removeAllRanges();
          button.innerHTML = 'COPY';
        }, 2000);
      } catch (err) {
        alert('Oops, try again!');
      }
    },
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'updateComponentName') this.name = state.name;
    });
  },
};
</script>

<style>
#generated-template {
  overflow: auto;
  padding: 0.5em;
  height: 40em;
  background: #0E0E0E;
  color: #DFDCDC;
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 1.5em;
}

.indent {
  margin-left: 1em;
}

.double-indent {
  margin-left: 2em;
}

.deep-indent {
  margin-left: 3em;
}

.component-name, .example {
  font-weight: 800;
  font-style: Tahoma;
}

.component-name {
  color: #de77ae;
}

.example {
  color: #fdb863;
}

#copy-button {
  float: right;
  font-size: 0.8em;
  padding: 0.5em 0.9em;
  background: rgb(172, 139, 200, 0.8);
  color: #FFF;
}

@media screen and (max-width: 1350px) {
  label, textarea {
    display: block;
  }
}
</style>
