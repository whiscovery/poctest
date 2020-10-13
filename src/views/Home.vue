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
  computed: {
    ...mapGetters(["getSpeakersInfo"]) //vuex에서 불러오기
  },
  mounted() {
    this.sortSpeakers()
  },
  // mounted() {
  //   this.printSpeakers()
  // },
  methods: {
    sortSpeakers() {
      this.speakersInfo.sort((a, b) => {
        return b.multispeech - a.multispeech
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

