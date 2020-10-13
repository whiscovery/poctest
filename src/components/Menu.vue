<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'sortbyrank' }">Rank</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'sortbynameasc' }">Name(A-Z)</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'sortbynamedesc' }">Name(Z-A)</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'sortbyyearasc' }"
          >Year(2006-2019)</router-link
        >
      </li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'sortbyyeardesc' }"
          >Year(2019-2006)</router-link
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
