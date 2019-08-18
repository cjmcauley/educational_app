<template lang="html">
  <div>
    <div v-if="$route.params.filter === 'indoor'">
      <div v-if="this.project.indoor === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
      </div>
    </div>

    <div v-if="$route.params.filter === 'outdoor'">
      <div v-if="this.project.indoor === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
      </div>
    </div>

    <div v-if="$route.params.filter === 'edible'">
      <div v-if="this.project.edible === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
      </div>
    </div>

    <div v-if="$route.params.filter === 'not-edible'">
      <div v-if="this.project.edible === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import { eventBus } from '../main.js'
import Router from 'vue-router';
import ProjectService from '../services/ProjectService.js'

export default {
  name: 'project-card',
  data () {
    return {
      info: []
    }
  },
  props: ['project'],
  components: {
    'router': Router
  },
  methods: {
    handleClick() {
      eventBus.$emit('project-selected', this.project)}
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
