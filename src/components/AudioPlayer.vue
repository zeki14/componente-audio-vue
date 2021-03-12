<template>
    <div>

        <audio controls :id="playerId">
            <source src="../../public/music/AsTimeGoesBy.mp3"
            type="audio/mpeg">
                Your browser does not support the audio tag.
        </audio>
    </div>
</template>

<script>
export default {
    name: 'AudioPlayer',
    // data: () => ({
    //     file: '@/public/music/AsTimeGoesBy.mp3'
    // }),
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
    props: ['playerId']
}
</script>

<style>
button{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    border-radius: 1em;
    margin: 1em;
    padding: 0.3em;
    }
</style>
