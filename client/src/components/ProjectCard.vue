<template lang="html">
  <div>
    <div v-if="$route.params.filter === 'indoor'">
      <div v-if="this.project.indoor === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>

        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)">In progress</button>

      </div>
    </div>

    <div v-if="$route.params.filter === 'outdoor'">
      <div v-if="this.project.indoor === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>

        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)">In progress</button>

      </div>
    </div>

    <div v-if="$route.params.filter === 'edible'">
      <div v-if="this.project.edible === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>
        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)">In progress</button>

      </div>
    </div>

    <div v-if="$route.params.filter === 'not-edible'">
      <div v-if="this.project.edible === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>
        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)">In progress</button>

      </div>
    </div>

    <div v-if="$route.params.filter === 'favourite'">
      <div v-if="this.project.favourite === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>
        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)">In progress</button>

      </div>
    </div>

    <div v-if="$route.params.filter === 'progress'">
      <div v-if="this.project.inProgress ===true" class= "project-card"
      @click="handleClick">
      <router-link :to="{ name: 'instructions' }">
        <h3>{{ project.commonName}}</h3>
        <p>Season: {{ project.growingSeason }}</p>
        <p>Grow Time: {{ project.growTime }}</p>
      </router-link>
      <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)">Add to Fav</button>
      <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)">Remove from Fav</button>
      <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" >Not in progress</button>
      <button v-if="project.inProgress === true" type="button" name="progress"
      @click="handleProgress(project._id, project)">In progress</button>
      </div>
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
      eventBus.$emit('project-selected', this.project)
    },
    handleFavourite(id, project) {
      project.favourite = !project.favourite
      ProjectService.updateProject(id, project)
    },
    handleProgress(id, project) {
      project.inProgress = !project.inProgress
      ProjectService.updateProject(id, project)
    }
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
