<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Home",
  data() {
    return {
      i: null,
      show: true,
      speakersInfo: [],
      speakers: [],
      index: null
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
          this.$store.commit("setSpeakersInfo", this.speakersInfo)
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
        .then(() => {
          // always executed
        })
    },
    checkDubName(checkingname, i) {
      //이름 중복되면 안보이게 하기 위해 v-if에 return false
      if (i >= 1) {
        if (checkingname != this.speakersInfo[i - 1].name) {
          return true
          //console.log("True : " + checkingname + " VS " + this.speakersInfo[i-1].name)
        } else {
          return false
          //console.log("False : " + checkingname + " VS " + this.speakersInfo[i-1].name)
        }
      } else {
        return true
      }
    },
    checkRibbon(multispeech) {
      let medal = "./img/medal/speakerRibon_bronze.png" //리본은 동메달을 기본으로
      if (multispeech >= 5) {
        // 발표횟수에 따라 리본 다르게 설정
        medal = "./img/medal/speakerRibon_diamond_gold.png"
      } else if (multispeech == 4) {
        medal = "./img/medal/speakerRibon_diamond_silver.png"
      } else if (multispeech == 3) {
        medal = "./img/medal/speakerRibon_gold.png"
      } else if (multispeech == 2) {
        medal = "./img/medal/speakerRibon_silver.png"
      } else {
        medal = "./img/medal/speakerRibon_bronze.png"
      }
      return medal
    },
    setPhoto(name) {
      let nameimg = "./img/speakers/hacker.png"
      name = name.replace(/(\s*)/g, "")
      nameimg = "./img/speakers/" + name + ".png"
      return nameimg
    },
    checkSpeech(name) {
      let res = this.speakersInfo.filter(it => it["name"] == name)
      return res
    }
  }
}
</script>

