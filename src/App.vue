<template>
  <div id="app">
    <img src="./assets/ricks-cafe2.jpg" alt="Ricks-cafe-background" class= "bck-grnd">
    <Main txt="Que canción sonará?" />
    <AudioPlayer texto = 'play it again, Sam'  />
    <Parragraph  txt="Tócala otra vez!!" />

  </div>
</template>

<script>
import Main from './components/Main'
import AudioPlayer from './components/AudioPlayer'
import Parragraph from './components/Parragraph'
export default {
  name: 'App',
  components: {
    Main,
    AudioPlayer,
    Parragraph
  }
}
</script>

<style>
#app {
  background: #3E5151;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #DECBA4, #809c9c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #DECBA4, #d3e2e2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d1c1b;
  /* margin-top: 60px; */
  /* width: 60vw;
  height: 80vh; */
 margin: 0vh 20vw;
}
.gif-animated{
  position: absolute;
  top: 35vh;
  right: 36vw;
  border-radius: 50%;
  /* margin: -60px; */
  z-index: 1;
  }
.bck-grnd{
  opacity: 0.8;
  position: relative;
  /* margin:30px 0 -60px 0; */
  border-radius: 10%;
  width: 58vw;
  }
h1{
  opacity: 1;
  }
.txt2{
  margin-top: 2em;
}
</style>
