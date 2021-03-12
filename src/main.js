import Vue from 'vue'
import App from './App.vue'
import AudioPlayer from './components/AudioPlayer.vue'
Vue.component('audio-player', AudioPlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
