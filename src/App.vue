<template>
 <div>
      <img src="./assets/ricks-cafe2.jpg" alt="Ricks-cafe-background" class= "bck-grnd">
      <ImageGif />
      <AudioPlayer />
  </div>
</template>

<script>
import AudioPlayer from "./components/AudioPlayer.vue";
import ImageGif from "./components/ImageGif.vue";
export default {
  name: "App",
  components: {
    AudioPlayer,
    ImageGif
  },
};</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bck-grnd{
  opacity: 0.8;
  position: relative;
  /* margin:30px 0 -60px 0; */
  border-radius: 10%;
  width: 58vw;
  }
</style>