<template>
  <section>
    <article v-for="example in this.$store.state.examples" :key="example">
    <br/>
      <span class="indent">
          it('<span class="example">{{ example }}</span>', () => {</span>
          <br/>
          <span class="double-indent">// expect(...);</span>
          <br/>
          <span class="indent">});</span>
    <br/>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Example',
};
</script>
