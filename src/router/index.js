import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Speaker.vue")
  },
  // {
  //   path: "/speaker",
  //   name: "speaker",
  //   component: () =>
  //     import(/* webpackChunkName: "speakers" */ "../views/Speaker.vue")
  // },
  {
    path: "/sortbynameasc",
    name: "sortbynameasc",
    component: () =>
      import(
        /* webpackChunkName: "sortbynameasc" */ "../views/SortByNameAsc.vue"
      )
  },
  {
    path: "/sortbynamedesc",
    name: "sortbynamedesc",
    component: () =>
      import(
        /* webpackChunkName: "sortbynamedesc" */ "../views/SortByNameDesc.vue"
      )
  },
  {
    path: "/sortbyyearasc",
    name: "sortbyyearasc",
    component: () =>
      import(
        /* webpackChunkName: "sortbyyearasc" */ "../views/SortByYearAsc.vue"
      )
  },
  {
    path: "/sortbyyeardesc",
    name: "sortbyyeardesc",
    component: () =>
      import(
        /* webpackChunkName: "sortbyyeardesc" */ "../views/SortByYearDesc.vue"
      )
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
