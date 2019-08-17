<template lang="html">
  <div class="project-card">
    <h3>{{ project.commonName}}</h3>
    <p>Season: {{ project.growingSeason }}</p>
    <p>Grow Time: {{ project.growTime }}</p>
  </div>

</template>

<script>
import { eventBus } from '../main.js'
import ProjectService from '../services/ProjectService.js'

export default {
  name: 'project-card',
  props: ['project']
}
</script>

<style lang="css" scoped>
</style>
