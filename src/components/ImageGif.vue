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
  name: 'Imagen',
  props: {
    txt: String
  }
}
</script>

<style>
h1{
  margin: 100px 0 0 0;
}
.gif-animated{
  position: absolute;
  top: 35vh;
  right: 36vw;
  border-radius: 50%;
  /* margin: -60px; */
  z-index: 1;
  }
</style>