<template>
  <v-app>
    <h1>
      <p class="text-center">
        <img src="#" />
      </p>
    </h1>
    <v-app-bar app>
      <MenuComponent></MenuComponent>
    </v-app-bar>

    <div class="jumbotron">
      <router-view> </router-view>
    </div>
    <!-- <v-footer>
      <h2>footer</h2>
    </v-footer> -->
  </v-app>
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
