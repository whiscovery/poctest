<template>
  <v-app>
    <v-navigation-drawer app>
      <h2>navi</h2>
    </v-navigation-drawer>

    <v-app-bar app>
      <MenuComponent></MenuComponent>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </v-main>
    <v-footer>
      <h2>footer</h2>
    </v-footer>
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
