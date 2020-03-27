<template>
  <main id="app">
    <Form />
    <Template />
  </main>
</template>

<script>
import Template from '@/components/Template.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    Form,
    Template,
  },
};
</script>

<style>
body, input, label, textarea {
  font-family: 'Quicksand', sans-serif;
  background: #1B2233;
  color: #E8EAEF;
}

#app {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

main {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

@media screen and (max-width: 1350px) {
  #app {
    grid-template-columns: 1fr;
  }
}
</style>
