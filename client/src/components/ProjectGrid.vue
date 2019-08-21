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
      projectSelected: null,
      progress: []
    };
  },
  components: {
    'project-card': ProjectCard
  },
  mounted() {
    this.fetchData();

},
  methods: {
    fetchData(){
      ProjectService.getProject()
      .then(projects => this.projects = projects);
    }
  }
}
</script>

<style lang="css" scoped>

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 5% 0;
  flex-grow: 1;
  flex-wrap: wrap;
}

</style>
