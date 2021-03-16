<template>
    <div>
        <audio controls :id="playerId">
            <source src=""
            type="audio/mpeg">
                Your browser does not support the audio tag.
        </audio>
      <TrackToSound @myTrack= 'myTrack=$event'/>
    </div>
</template>

<script>
import TrackToSound from "./TrackToSound.vue";
export default {
    name: 'AudioPlayer',
    components: {
        TrackToSound,
    },
    data: () => ({
        myTrack: 'myTrack'
    }),
    methods: {
    toggleAudio () {
    const audio = document.getElementById(this.playerId)
    if (audio.paused) {
        audio.plays()
    } else {
        audio.pause()
        }
    }
  },
  props: [ 'playerId' ]
}
</script>

<style>

</style>