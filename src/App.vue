<template>
  <main id="app">
    <ComponentDetailForm />
    <TemplateContainer />
  </main>
</template>

<script>
import 'es6-promise/auto';

import TemplateContainer from '@/components/TemplateContainer.vue';
import ComponentDetailForm from '@/components/ComponentDetailForm.vue';

export default {
  name: 'App',
  components: {
    ComponentDetailForm,
    TemplateContainer,
  },
};
</script>

<style>
body, input, label, textarea {
  font-family: 'Quicksand', sans-serif;
  background: #1B2233;
  color: #FFF;;
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
