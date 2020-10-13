<template>
  <v-container>
    <LoadingSpeakerComponent></LoadingSpeakerComponent>
  </v-container>
</template>

<script>
import LoadingSpeakerComponent from "@/components/LoadingSpeaker.vue"

export default {
  components: {
    LoadingSpeakerComponent
  },
  data() {
    return {
      speakersInfo: []
    }
  }
}
</script>
