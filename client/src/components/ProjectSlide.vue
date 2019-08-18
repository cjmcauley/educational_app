<template lang="html">
<div>

<div>

<v-card colour="menu">
  <v-card-title>
    <h1>Grow your own {{project.commonName}}</h1>
  </v-card-title>
</v-card>

<v-tabs
v-model="tab"
background-colour="transparent"
colour="menu"
grow
>
<v-tab
v-for="header in headers"
:key="header"
>
{{ header }}
</v-tab>
</v-tabs>
</div>









  <div>
    <h1>Instructions</h1>
    <p>{{project.name}}</p>
    <p>{{project.growingSeason}}</p>
    <p>{{project.edible}}</p>
    <p>{{project.indoor}}</p>
    <p>{{project.growtime}}</p>
    <p>{{project.description}}</p>
    <p>{{project.steps[0]}}</p>
    <p>{{project.steps[1]}}</p>
    <p>{{project.steps[2]}}</p>
    <p>{{project.steps[3]}}</p>
    <p>{{project.steps[4]}}</p>
    <p>{{project.steps[5]}}</p>
    <p>{{project.steps[6]}}</p>
    <p>{{project.steps[7]}}</p>
  </div>

</div>


</template>

<script>
import { eventBus } from '../main.js'
import ProjectGrid from './ProjectGrid.vue'

export default {
  name: 'instructions',
  data () {
    return {
      project: null,
      headers: [ 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7' ]
    }
  },
  props: ['projectSelected'],
  components: {
    'project-grid': ProjectGrid
  },
  mounted (){
    eventBus.$on('project-selected', (project) => {this.project = project})
  }
}
</script>

<style lang="css" scoped>

.menu{
  background-color: #EA7E51;
}
</style>
