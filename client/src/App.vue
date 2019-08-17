<template lang="html">
  <div>
    <home-nav />
    <project-grid />

  </div>

</template>

<script>
import ProjectService from './services/ProjectService.js';
import HomeNavigation from './components/HomeNavigation.vue';
import ProjectGrid from './components/ProjectGrid.vue';

export default {
  name: 'app',
  components: {
    'home-nav': HomeNavigation,
    'project-grid': ProjectGrid
  }
}
</script>

<style lang="css">
</style>
