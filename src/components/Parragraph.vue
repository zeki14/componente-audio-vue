<template>
  <div>
    <div>
        <h3>{{ txt }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parragraph',
  props: {
    txt: String
  }
}
</script>

<style>
h3{
    margin: 1em 0 5em 0;
}
</style>
