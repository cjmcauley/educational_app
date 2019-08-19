<template lang="html">
  <v-card v-if="project" flat>
    <v-card-title>
     <h1 v-if="project.commonName">How to grow your own {{ project.commonName }}</h1>
   </v-card-title>
    <v-tabs v-model="tabs" background-color="transparent" centered>
      <v-tab v-for="header in headers" :key="header">
        {{ header }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">

      <v-tab-item v-if="project !== null">
        <v-card flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard5.png"></v-img>
          <v-card-text>
            <ul>
              <li v-if="project.steps[0][0]">{{ project.steps[0][0] }}</li>
              <li v-if="project.steps[0][1]">{{ project.steps[0][1] }}</li>
              <li v-if="project.steps[0][2]">{{ project.steps[0][2] }}</li>
              <li v-if="project.steps[0][3]">{{ project.steps[0][3] }}</li>
              <li v-if="project.steps[0][4]">{{ project.steps[0][4] }}</li>
              <li v-if="project.steps[0][5]">{{ project.steps[0][5] }}</li>
              <li v-if="project.steps[0][6]">{{ project.steps[0][6] }}</li>
            </ul>
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
      project: null,
      headers: ['Before You Start', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6' ],
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

.slide-image {
  height: auto;
  width: 40%;
}

</style>
