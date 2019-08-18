<template lang="html">
  <div>

    <div v-if="$route.params.filter === 'indoor'">
      <div v-if="this.project.indoor === true" class="project-card" @click="handleClick">
        <h3>{{ project.commonName}}</h3>
        <p>Season: {{ project.growingSeason }}</p>
        <p>Grow Time: {{ project.growTime }}</p>
      </div>

    </div>
    <div v-if="$route.params.filter === 'outdoor'">
      <a href="#">
      <div v-if="this.project.indoor === false" class="project-card">
        <h3>{{ project.commonName}}</h3>
        <p>Season: {{ project.growingSeason }}</p>
        <p>Grow Time: {{ project.growTime }}</p>
      </div>
    </a>

    </div>
    <div v-if="$route.params.filter === 'edible'">
      <a href="#">
      <div v-if="this.project.edible === true" class="project-card">
        <h3>{{ project.commonName}}</h3>
        <p>Season: {{ project.growingSeason }}</p>
        <p>Grow Time: {{ project.growTime }}</p>
      </div>
    </a>

    </div>
    <div v-if="$route.params.filter === 'not-edible'">
      <a href="#">
      <div v-if="this.project.edible === false" class="project-card">
        <h3>{{ project.commonName}}</h3>
        <p>Season: {{ project.growingSeason }}</p>
        <p>Grow Time: {{ project.growTime }}</p>
      </div>
    </a>

    </div>
  </div>


</template>

<script>
import { eventBus } from '../main.js'
import ProjectService from '../services/ProjectService.js'

export default {
  name: 'project-card',
  data () {
    return {
      info: []
    }
  },
  props: ['project'],
  methods: {
    handleClick() {
       eventBus.$emit('project-selected', this.project)
    }
  }
}
</script>

<style lang="css" scoped>

.project-card {
  background-color: #7FCBB0;
  padding: 5px;
  margin: 5px;
}

</style>
