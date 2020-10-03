<template>
  <v-container>
    <div class="d-flex justify-content-center flex-wrap" id="speakers">
      <div
        v-for="(speakers, index) in speakersInfo"
        :key="index"
        class="p-2 mr-auto justify-content-center bd-hightlight"
      >
        <div class="card" style="width: 240px">
          <div class="img-box text-center">
            <img src="" width="212" />
          </div>
          {{ speakers.name }}
        </div>
      </div>
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
    printSpeakers() {}
  }
}
</script>
