<template>
  <section>
    <h2>Enter your component data</h2>
    <label for="component-name">Component name</label>
    <input id="component-name" />
    <label for="method-name">Method name</label>
    <input id="method-name" />
    <label for="context-name">Context name</label>
    <input id="context-name" />
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
section {
  margin-right: 1em;
}

label, input {
  display: block;
}

label {
  margin-bottom: 0.5em;
}

input {
  width: 40em;
  padding: 0.5em;
  margin-bottom: 1.5em;
}

@media screen and (max-width: 900px) {
  input {
    width: 70%;;
  }
}

@media screen and (max-width: 600px) {
  input {
    width: 100%;;
  }
}
</style>
