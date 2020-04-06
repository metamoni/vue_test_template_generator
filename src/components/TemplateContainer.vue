<template>
  <section>
    <h2>Your template</h2>
    <button id="copy-button" @click="copyTemplate">Copy to clipboard</button>
    <div id="generated-template">
      import { shallowMount } from '@vue/test-utils';<br/>
      import
      <span class="component-name">
        {{ componentName }}
      </span> from '@/components/
      <span class="component-name">
        {{ componentName }}.vue</span>';
      <br/>
      <br/>
      describe('
      <span class="component-name">
        {{ componentName }}
      </span>
      ', () => {
      <br/>
      <span class="indent">let wrapper;</span>
      <br/>
      <br/>
      <span class="indent">beforeEach(() => {</span><br/>
        <span class="double-indent">
          wrapper = shallowMount(<span class="component-name">{{ componentName }}</span>);
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
        <br/>
      <span class="indent">
        it('<span class="example">{{ example }}</span>', () => {</span>
        <br/>
        <span class="double-indent">// expect(...);</span>
        <br/>
        <span class="indent">});</span>
        <br/>
        <br/>
      <span class="indent">
        describe('<span class="context">{{ context }}</span>', () => {</span>
        <br/>
        <span class="double-indent">// block setup</span>
        <br/>
        <br/>
        <span class="double-indent">it('<span class="context-example">
          does something related to this context
          </span>', () => {<br/>
          <span class="double-indent">
            <span class="double-indent">// expect(...);</span>
            </span><br/>
          <span class="double-indent">});</span>
        </span>
        <br/>
        <span class="indent">});</span>
        <br/>
      });
    </div>
  </section>
</template>

<script>
export default {
  name: 'TemplateContainer',
  data() {
    return {
      componentName: this.$store.state.componentName,
      example: this.$store.state.example,
      context: this.$store.state.context,
      method: this.$store.state.methodName,
    };
  },
  methods: {
    copyTemplate() {
      if (document.selection) {
        const range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('generated-template'));
        range.select().createTextRange();
        document.execCommand('copy');
      } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(document.getElementById('generated-template'));
        window.getSelection().addRange(range);
        document.execCommand('copy');
        // document.getElementById('copy-button').innerText = 'Done!';
      }
    },
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case 'updateComponentName':
          this.componentName = state.componentName;
          break;
        case 'updateExample':
          this.example = state.example;
          break;
        case 'updateMethodName':
          this.method = state.methodName;
          break;
        case 'updateContext':
          this.context = state.context;
          break;
        default:
      }
    });
  },
};
</script>

<style scoped>
#generated-template {
  overflow: scroll;
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

.component-name, .example, .context, .context-example {
  font-weight: 800;
  font-style: Tahoma;
}

.component-name {
  color: #de77ae;
}

.example {
  color: #fdb863;
}

.context {
  color: #86bb7f;
}

.context-example {
  color: #848cd3;
}

@media screen and (max-width: 1350px) {
  label, textarea {
    display: block;
  }
}
</style>
