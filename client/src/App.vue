<template lang="html">
  <div>
    <home-nav />

  </div>

</template>

<script>
import ProjectService from './services/ProjectService.js';
import HomeNavigation from './components/HomeNavigation.vue';

export default {
  name: 'app',
  components: {
    'home-nav': HomeNavigation
  }
}
</script>

<style lang="css">
</style>
