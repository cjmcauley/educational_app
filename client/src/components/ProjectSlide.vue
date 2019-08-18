<template lang="html">
  <div>
<h1>Header</h1>

  </div>

</template>

<script>
import ProjectGrid from './ProjectGrid.vue'

export default {
  name: 'instructions',
  props: ['projectSelected'],
  components: {
    'project-grid': ProjectGrid
  }
}
</script>

<style lang="css" scoped>
</style>
