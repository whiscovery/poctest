<template>
  <v-container>
    <SpeakersComponent :speakersInfo="speakersInfo"></SpeakersComponent>
  </v-container>
</template>

<script>
import SpeakersComponent from "@/components/Speakers.vue"
import axios from "axios"

export default {
  components: {
    SpeakersComponent
  },
  data() {
    return {
      speakersInfo: {}
    }
  },
  created() {
    this.speakersInfo = this.loadSpeakers()
  },
  methods: {
    loadSpeakers() {
      axios
        .get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=JkcOfggJobXcP2YBrYDmVOshdXuQJbfRn0-XfdfZhVChBNWuHoXrqXg9kiAMWWj4cGsncd2PqRRugogEOMs-9iKSCiARl4Nrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOqxU5QC_nZgRkPHyeCNP-n4QIUB6fjPh83U0hwv1lFRVFgZq68P2O7iBaYhCunJ0JK7g-6hpKLuKFxq41JwiLj3YGXp3BxfjQ&lib=MXlEvNmo98u7JPl4wcD1WZM7W5hCA46zX"
        )
        .then(res => {
          // handle success
          this.listSpeakers(res)
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
        .then(() => {
          // always executed
        })
    },
    listSpeakers(res) {
      var speakersList = res.data.data
      this.speakersInfo = speakersList
    }
  }
}
</script>
