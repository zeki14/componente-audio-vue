<template>
<div class="title">
  <div class="img-gif">
    <img alt="Casablanca" src="../assets/casablanca.gif" class="gif-animated">
  </div>
  <h1>{{ txt }}</h1>
</div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    txt: String
  },
  mounted () {
    if (localStorage.src) {
      this.src = localStorage.src
    }
  }
}
</script>

<style>
h1{
  margin: 100px 0 0 0;
}
</style>
