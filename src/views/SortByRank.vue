<template>
  <v-container>
    <div class="d-flex justify-content-center flex-wrap">
      <template v-for="(speakers, index) in speakersInfo">
        <div
          v-if="checkDubName(speakers.name, index)"
          class="p-2 mr-auto justify-content-center bd-hightlight"
          :key="index"
        >
          <div class="shadow-lg p-2 mb-5 bg-dark rounded">
            <div class="card" style="width: 240px;">
              <div class="img-box text-center">
                <div class="img-back">
                  <img
                    :src="setPhoto(speakers.name)"
                    class="rounded-circle"
                    width="212"
                  />
                </div>
                <div class="img-front1">
                  <img :src="checkRibbon(speakers.multispeech)" width="240" />
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ speakers.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted"></h6>
                <p class="card-text text-left">
                  <br />
                  <template v-for="item in checkSpeech(speakers.name)">
                    <div :key="item.year">
                      <span class="badge badge-success">POC{{ item.year }}</span
                      > {{ item.title }}
                      <br />
                    </div>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import ListMixin from "../utils/ListMixin.js"
export default {
  data() {
    return {
      i: null,
      show: true,
      speakersInfo: this.$store.state.speakersInfo, //speakersInfo에 vuex의 state 정보 넣기
      speakers: [],
      index: null
    }
  },
  mixins: [ListMixin],
  computed: {
    ...mapGetters(["getSpeakersInfo"]) //vuex에서 불러오기
  },
  created() {
    if (this.speakersInfo.length === 0) {
      this.$store.dispatch("getSpeakersData")
    }
  },
  mounted() {
    this.sortSpeakers()
  },
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
