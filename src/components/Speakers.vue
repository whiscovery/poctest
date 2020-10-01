<template>
  <v-container>
    <h1>{{ printSpeakers }}</h1>
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
    printSpeakers() {
      this.speakerName = this.speakersInfo.name
      return this.speakerName
    }
  }
}
</script>
