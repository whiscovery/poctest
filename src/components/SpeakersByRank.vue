<template>
  <v-container>
    <div v-for="(speakers, index) in speakersInfo" :key="index">
      {{ speakers.name }}
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["speakersInfo"],
  data() {
    return {
      speakerName: null
    }
  },
  methods: {
    // printSpeakers() {
    //   this.speakerName = this.speakersInfo
    // }
  }
}
</script>
