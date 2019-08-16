<template lang="html">
  <h2>Project</h2>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      projects: []
    }
  },
  components: {
    'projects-slide': ProjectsSlide
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

<style lang="css" scoped>
</style>
