<template lang="html">
  <v-card v-if="project" flat>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="project-header"  v-if="project.commonName">How to grow your own {{ project.commonName }}</h1>
    </v-card-title>
    <v-tabs class="tabs" v-model="tabs" background-color="transparent" color="#EA7E51" centered fixed-tabs>
      <v-tab v-for="header in headers" :key="header">
        {{ header }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">

      <v-tab-item v-if="project !== null">
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard10.png"></v-img>
          <v-card-text>
            <h2 class="tools">You Will Need:</h2>
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
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard9.png"></v-img>
          <v-card-text>
            {{ project.steps[1] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard6.png"></v-img>
          <v-card-text>
            {{ project.steps[2] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard2.png"></v-img>
          <v-card-text>
            {{ project.steps[3] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard5.png"></v-img>
          <v-card-text>
            {{ project.steps[4] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard3.png"></v-img>
          <v-card-text>
            {{ project.steps[5] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artboard8.png"></v-img>
          <v-card-text>
            {{ project.steps[6] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>

          <v-img class="last-slide-image" src="@/assets/elements/congrats.png"></v-img>

          <div>
            <v-row :align="vertical" no-gutters>
              <v-card tile>
                Congratulations !
                <br>
                <router-link :to="{ name: 'home'}">Go back home</router-link>
                <router-link :to="{ name: 'projects', params: { filter: 'show-all'}}">Start a new project</router-link>
              </v-card>
              <v-card outlined tile>
                Rate the Project
              </v-card>
            </v-col>
          </v-row>
        </div>
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
      headers: ['Before You Start', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7' ],
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

.tools{
  font-size: 22px;
  padding-bottom: 15px;
}
.tabs{
  font-family: sofia-pro, sans-serif;
  font-size: 45px;
}
.v-tab{
  font-size: 16px;
}
.v-card__text{
  font-family: sofia-pro, sans-serif;
  font-size: 25px;
  width: 60%;

}
.v-card__title{
  align-content: center;
}
.slide-image {
  height: auto;
  width: 40%;
}
.last-slide-image {
  width: 20%;
  height: auto;
}
.project-header{
  font-family: chaloops, sans-serif;
  padding: 15px 0px;
}
.v-card-text{
  font-family: sofia-pro, sans-serif;
}
ul li{
  display: inline;
  padding-right: 25px;
}
li {
  font-family: sofia-pro, sans-serif;
  font-size: 22px;
  text-decoration: underline #E8B662;
}

</style>
