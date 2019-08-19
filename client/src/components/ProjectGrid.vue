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
      // favourite: [],
      progress: []
    };
  },
  components: {
    'project-card': ProjectCard
  },
  mounted() {
    this.fetchData();

//     if(localStorage.favourite) this.favourite = localStorage.favourite;
//
//     eventBus.$on('add-favourite', (project) => {
//     if(this.favourite.indexOf(project) === -1)
//     this.favourite.push(project);
//     })
//
//     eventBus.$emit('share-favourite', this.favourite)
// },
// watch: {
//   favourite(newFavourite) {
//     localStorage.favourite = newFavourite;
//   }
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
}

</style>
