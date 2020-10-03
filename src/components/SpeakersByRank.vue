<template>
  <v-container>
    <div class="d-flex justify-content-center flex-wrap" id="speakers">
      <div
        v-for="(speakers, index) in speakersInfo"
        :key="index"
        class="p-2 mr-auto justify-content-center bd-hightlight"
      >
        <div v-if="show">
          <div class="card" style="width: 240px">
            <div class="img-box text-center">
              <img src="" width="212" />
            </div>
            {{ speakers.name }}
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      i: null,
      show: true,
      speakersInfo: [],
      speakers: []
    }
  },
  created() {
    this.loadSpeakers()
  },
  // mounted() {
  //   this.printSpeakers()
  // },
  methods: {
    async loadSpeakers() {
      await axios
        .get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=JkcOfggJobXcP2YBrYDmVOshdXuQJbfRn0-XfdfZhVChBNWuHoXrqXg9kiAMWWj4cGsncd2PqRRugogEOMs-9iKSCiARl4Nrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOqxU5QC_nZgRkPHyeCNP-n4QIUB6fjPh83U0hwv1lFRVFgZq68P2O7iBaYhCunJ0JK7g-6hpKLuKFxq41JwiLj3YGXp3BxfjQ&lib=MXlEvNmo98u7JPl4wcD1WZM7W5hCA46zX"
        )
        .then(res => {
          // handle success
          this.speakersInfo = res.data.data
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
        .then(() => {
          // always executed
        })
    },
    numberOfSpeech() {}
    // makeNewArray() {
    //   for (i = 0; i < this.speakersInfo.length - 1; i++) {
    //     if (this.speakersInfo[i]["name"] == this.speakersInfo[i + 1]["name"]) {
    //       this.speakers.push(this.speakersInfo[i])
    //     }
    //   }
    // }
  }
}
</script>
