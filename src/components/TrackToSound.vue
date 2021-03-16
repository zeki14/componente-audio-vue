<template>
</template>

<script>
import { getTrack, getToken } from "../functions/spotifyAPI";
export default {
  async setup() {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const token = await getToken(clientId, clientSecret);
    let track = await getTrack(token);
    // console.log(track);
    return {
      track
    };
  },
  // data: () =>({
  //   urlTrack: track
  // }),
  mounted (){
    this.$emit('myTrack', this.track)
  }
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}
</style>