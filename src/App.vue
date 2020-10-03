<template>
  <div>
    <div>
      <p class="text-center">
        <img src="./assets/top2.png" />
      </p>
    </div>
    <div>
      <MenuComponent></MenuComponent>
    </div>

    <div class="jumbotron">
      <router-view> </router-view>
    </div>
    <!-- <v-footer>
      <h2>footer</h2>
    </v-footer> -->
  </div>
</template>

<script>
import MenuComponent from "@/components/Menu.vue"

export default {
  name: "App",
  components: {
    MenuComponent
  },
  data: () => ({
    drawer: null
  }),
  props: {
    soucre: String
  }
}
</script>
