<template lang="html">
  <div>

  <h1>Instructions</h1>
  <project-slide ></project-slide>
</div>
</template>

<script>
import ProjectSlide from '../components/ProjectSlide.vue';
export default {
  name: 'instructions',
  components: {
    'project-slide': ProjectSlide
  }
}
</script>

<style lang="css" scoped>
</style>
