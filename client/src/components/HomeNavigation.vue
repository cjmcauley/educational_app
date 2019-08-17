<template lang="html">
  <div>
    <h1>App Name</h1>
    <p>some text about the app and plants and kids and whatnot</p>
    <div class="wrapper">

      <div class="indoor">
        Indoor
      </div>
      <div class="outdoor">
        Outdoor
      </div>
      <div class="edible">
        Edible
      </div>
      <div class="not-edible">
        Not-edible
      </div>
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
