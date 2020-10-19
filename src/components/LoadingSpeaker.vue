<template>
  <v-container>
    <div class="text-center">
      <v-sheet
        color="#000"
        elevation="1"
        rounded
        shaped
        width="100%"
        class="sheetthanks"
      >
        <h5 class="thanks">
          POC started in 2006 and has been organized by Korean hackers &
          security experts. <br />POC is a conference created by the best
          speakers. Because of them, POC has become best conference and we
          believe POC will continue to go further. On the 15th Anniversary of
          POC Conference, we express our gratitude to the speakers who have
          joined us.
        </h5>
      </v-sheet>
    </div>
    <div class="lds-facebook" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <v-container>
      <v-row>
        <v-col cols="6" md="3" v-for="n in pocyears" :key="n" class="yearscard">

            <p class="yearlogo">{{n}}</p>
          
          <v-card elevation="16" max-width="300">
            <v-virtual-scroll
              :items="sortSpeakers(checkYear(n))"
              height="300"
              item-height="50"
              class="yearsinside"
              color="dark"
            >
              <template v-slot="{ item, index }">
                <v-list-item :key="index">
                  <v-list-item-action>
                    <v-list-item-avatar>
                      <v-img :src="setPhoto(item.name)"></v-img>
                    </v-list-item-avatar>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title class="yearstext">
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-col>
</v-row
      ></v-container
    >
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
      speakers: [],
      index: null,
      loading: false,
      pocyears: [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006 ]
    }
  },
  created() {
    this.loading = true

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
          this.loading = false
        })
        .catch(err => {
          // handle error
          this.loading = false
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
    },
    checkYear(year) {
      let res = this.speakersInfo.filter(it => it["year"] == year)
      return res
    },
    sortSpeakers(res) {
      res.sort((a, b) => {
        return a.name.toUpperCase() < b.name.toUpperCase()
          ? -1
          : a.name.toUpperCase() > b.name.toUpperCase()
          ? 1
          : 0
      })
      return res
    }
  }
}
</script>

<style>
body {
  color: #bdc3c7;
}
.yearscard {
  color: #bdc3c7;
  text-align: left;
  width: 100%;
  padding: 30px 40px 30px 40px;
}
.yearsinside {
  background-color: black;
  color: #bdc3c7;
  text-align: left;
}
.yearstext {
  color: #bdc3c7;
  font-size: 0.9em;
  padding: 10px;
}
.yearlogo {
  background-color: transparent;
  color: #bdc3c7;
  font-size: 2em;
  font-family: 'Sansita Swashed', cursive;
  padding: 0 0 -10px 0;
}
.sheetthanks {
  margin: -30px 10px 20px 10px;
  padding: 10px 10px;
}
.thanks {
  color: #bdc3c7;
  font-size: 15px;
  padding: 30px 20px;
  text-align: justify;
}
.lds-facebook {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #42b883;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}
</style>
