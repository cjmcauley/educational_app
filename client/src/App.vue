<template lang="html">
  <div>
    <h2>Project</h2>

    <p>{{projects[0].name}}</p>
  </div>

</template>

<script>
import ProjectService from './services/ProjectService.js';

export default {
  name: 'app',
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      ProjectService.getProject()
      .then(projects => this.projects = projects)
    }}
  }
  </script>

  <style lang="css">
  </style>
