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
  margin-right: 2em;
}

label, input {
  display: block;
}

label {
  margin-bottom: 0.5em;
}

input {
  color: #c7cfe2;
  font-size: 1em;
  width: 30em;
  padding: 0.5em;
  margin-bottom: 1.5em;
}

@media screen and (max-width: 1350px) {
  input {
    width: 70%;;
  }
}

@media screen and (max-width: 700px) {
  input {
    width: 100%;;
  }
}
</style>
