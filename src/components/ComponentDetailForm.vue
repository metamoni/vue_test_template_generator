<template>
  <section>
    <h2>Enter your component data</h2>
    <label for="component-name">Component name</label>
    <input id="component-name" @keyup="updateName" :placeholder="this.$store.state.componentName" />

    <label for="example">Test description</label>
    <input id="example" @keyup="updateExample" :placeholder="this.$store.state.example" />

    <button>Add test</button>
    <button @click="addContext">Add context</button>
  </section>
</template>

<script>
export default {
  name: 'ComponentDetailForm',
  methods: {
    updateName(event) {
      this.$store.commit('updateComponentName', event.target.value);
    },
    updateExample(event) {
      this.$store.commit('updateExample', event.target.value);
    },
    updateContext(event) {
      this.$store.commit('updateContext', event.target.value);
    },
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
