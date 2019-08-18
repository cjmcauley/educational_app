<template lang="html">
  <div>
<h1>Instructions</h1>

  </div>

</template>

<script>
import ProjectGrid from './ProjectGrid.vue'

export default {
  name: 'instructions',
  data () {
    return {
      project: null
    }
  },
  props: ['projectSelected'],
  components: {
    'project-grid': ProjectGrid
  }
}
</script>

<style lang="css" scoped>
</style>
