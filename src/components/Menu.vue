<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">Sort:</li>
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'speaker' }">Number of speech</router-link>
      </li>
      <li class="breadcrumb-item">
        <a href="./index.htm?sortby=name&sortorder=asc">Name(A-Z)</a>
      </li>
      <li class="breadcrumb-item">
        <a href="./index.htm?sortby=name&sortorder=desc">Name(Z-A)</a>
      </li>
      <li class="breadcrumb-item">
        <a href="./index.htm?sortby=year&sortorder=asc">Year(2006-2019)</a>
      </li>
      <li class="breadcrumb-item">
        <a href="./index.htm?sortby=year&sortorder=desc">Year(2019-2006)</a>
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
