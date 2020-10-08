<template>
  <v-container>
    <SpeakersByRankComponent></SpeakersByRankComponent>
  </v-container>
</template>

<script>
import SpeakersByRankComponent from "@/components/SpeakersByRank.vue"

export default {
  components: {
    SpeakersByRankComponent
  },
  data() {
    return {
      speakersInfo: []
    }
  }
}
</script>
