<template>
  <section>
    <article v-for="context in contexts" :key="context">
    <br/>
      <span class="indent">
          describe('<span class="context">{{ context }}</span>', () => {</span>
          <br/>
          <span class="double-indent">// block setup</span>
          <br/>
          <br/>
          <span class="double-indent">// it('does something related to this context', () => {});
          </span>
          <br/>
          <span class="indent">});</span>
    <br/>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Context',
  data() {
    return {
      contexts: this.$store.state.contexts,
    };
  },
};
</script>

<style scoped>
.context {
  color: #86bb7f;
}

.context, .context-example {
  font-weight: 800;
  font-style: Tahoma;
}
</style>
