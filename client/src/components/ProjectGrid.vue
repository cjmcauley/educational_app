<template lang="html">
  <div class="grid">

    <project-card v-for="(project, index) in projects" :key="index" :project="project" />

  </div>
</template>

<script>
import { eventBus } from '../main.js'
import ProjectService from '../services/ProjectService.js'
import ProjectCard from './ProjectCard.vue'

export default {
  data(){
    return{
      projects: [],
      projectSelected: null
    };
  },
  components: {
    'project-card': ProjectCard
  },
  mounted() {
    this.fetchData();

    eventBus.$on('project-selected', (project) => {
      this.projectSelected = project
    })
  },
  methods: {
    fetchData() {
      ProjectService.getProject()
      .then(projects => this.projects = projects);
    }
  }
}
</script>

<style lang="css" scoped>

  .grid {
    display: flex;
  }

</style>
