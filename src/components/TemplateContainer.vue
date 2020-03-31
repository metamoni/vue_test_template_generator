<template>
  <section>
    <h2>Your test template</h2>
    <label for="generated-template">Template</label>
    <textarea id="generated-template">Describe method name</textarea>
  </section>
</template>

<script>
export default {
  name: 'TemplateContainer',

};
</script>

<style scoped>
label, textarea {
  display: block;
}

textarea {
  color: #c7cfe2;
  font-size: 1em;
  padding: 0.5em;
  margin-bottom: 1.5em;
  height: 50em;
  width: 40em;
}

label {
  margin-bottom: 0.5em;
}

@media screen and (max-width: 1350px) {
  textarea {
    width: 100%;
  }
}
</style>
