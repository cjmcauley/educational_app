<template lang="html">
  <v-card>
    <v-tabs v-model="tabs" background-color="transparent" centered>
      <v-tab v-for="header in headers" :key="header">
        {{ header }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[0] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[1] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[2] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[3] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[4] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[5] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            {{ project.steps[6] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs-items>
  </v-card>

</template>


<script>
import { eventBus } from '../main.js'
import ProjectGrid from './ProjectGrid.vue'

export default {
  name: 'instructions',
  data () {
    return {
      project: [],
      headers: [ 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7' ],
      tabs: null
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

</style>
