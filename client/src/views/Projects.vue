<template lang="html">

  <div >
    <h1>Projects</h1>
    <project-grid />
    <router-view id="projects"></router-view>

  </div>

</template>

<script>
import ProjectGrid from '../components/ProjectGrid.vue';

export default {
  name: 'project',
  components: {
    'project-grid': ProjectGrid
  }
}
</script>

<style lang="css" scoped>
</style>
