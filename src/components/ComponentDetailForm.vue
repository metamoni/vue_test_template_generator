<template>
  <section>
    <h2>Enter your component data</h2>

    <label for="component-name">Component name</label><br/>
    <input id="component-name" @keyup="updateName" :placeholder="name" />

    <form id="example-form" @submit.prevent="submitExample()">
      <label for="example">Test description</label><br/>
      <input id="example" ref="exampleInput" :placeholder="example" />
      <button type="submit">ADD</button>
    </form>

    <form id="context-form" @submit.prevent="submitContext()">
      <label for="context">Context</label><br/>
      <input id="context" ref="contextInput" :placeholder="context" />
      <button type="submit">ADD</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ComponentDetailForm',
  data() {
    return {
      name: this.$store.state.name,
      example: this.$store.state.example,
      context: this.$store.state.context,
    };
  },
  methods: {
    updateName(event) {
      this.$store.commit('updateComponentName', event.target.value);
    },
    submitExample() {
      this.$store.commit('addExample', this.$refs.exampleInput.value);
      document.getElementById('example-form').reset();
    },
    submitContext() {
      this.$store.commit('addContext', this.$refs.contextInput.value);
      document.getElementById('context-form').reset();
    },
  },
};
</script>

<style scoped>
section {
  margin-right: 2em;
}

input {
  color: #c7cfe2;
  font-size: 1em;
  width: 30em;
  padding: 0.5em;
  margin-bottom: 1.5em;
  margin-top: 0.5em;
}

::placeholder {
  color: #969696;
}

#example, #context {
  width: 24em;
}

button {
  background: white;
  width: 4em;
  margin-left: 1em;
  padding: 0.3em 0.7em;
  font-size: 1.2em;
}

@media screen and (max-width: 1350px) {
  input {
    width: 70%;
  }

  #example, #context {
    width: 53%;
  }

  button {
    width: 15%;
  }
}

@media screen and (max-width:950px) {
  input {
    width: 93%;
  }

  #example, #context {
    width: 76%;
  }

  button {
    width: 15%;
  }
}

@media screen and (max-width: 700px) {
  #example, #context {
    width: 68%;
  }

  button {
    width: 20%;
  }
}

@media screen and (max-width: 460px) {
  #example, #context {
    width: 53%;
  }

  button {
    width: 30%;
    font-size: 1.2em;
  }
}
</style>
