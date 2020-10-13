<template>
  
  <v-container>
    <v-main>
      <p class="text-center">
        <img src="./assets/top2.png" class="img-fluid" />
      </p>
    </v-main>
    <v-main>
      <MenuComponent></MenuComponent>
    </v-main>
    <v-main>
    <div class="jumbotron">
      <router-view> </router-view>
    </div>
    <spinner :loading="LoadingStatus"></spinner>
    </v-main>
    <!-- <v-footer>
      <h2>footer</h2>
    </v-footer> -->
  </v-container>
</template>

<script>
import MenuComponent from "@/components/Menu.vue"
import Spinner from "@/components/Spinner.vue"
import bus from "./utils/bus.js"

export default {
  name: "App",
  components: {
    MenuComponent,
    Spinner
  },
  data: () => ({
    drawer: null,
    LoadingStatus: false
  }),
  props: {
    soucre: String
  },
  methods: {
    startSpinner() {
      this.LoadingStatus = true
    },
    endSpinner() {
      this.LoadingStatus = false
    }
  },
  created() {
    bus.$on("start:spinner", this.startSpinner)
    bus.$on("end:spinner", this.endSpinner)
  },
  beforeDestroy() {
    bus.$off("start:spinner")
    bus.$off("end:spinner")
  }
}
</script>
