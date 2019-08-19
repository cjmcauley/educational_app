<template lang="html">
  <div>
    <h1 align="center">App Name</h1>
    <p align="center">some text about the app and plants and kids and whatnot</p>
    <div class="wrapper">

      <div class="indoor">
        <router-link :to="{ name: 'projects', params: { filter: 'indoor' } }">Indoor</router-link>
      </div>
      <div class="outdoor">
        <router-link :to="{ name: 'projects', params: { filter: 'outdoor' } }">Outdoor</router-link>
      </div>
      <div class="edible">
        <router-link :to="{ name: 'projects', params: { filter: 'edible' } }">Edible</router-link>
      </div>
      <div class="not-edible">
        <router-link :to="{ name: 'projects', params: { filter: 'not-edible' } }">Not-edible</router-link>
      </div>
    </div>
    <div class="show-all">
      <router-link :to="{ name: 'projects', params: { filter: 'show-all'}}">Show All</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-nav'
}
</script>

<style lang="css" scoped>
.wrapper {
  width: 60%;
  padding-top: 40px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
