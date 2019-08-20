<template lang="html">
  <div align="center">

    <div v-if="$route.params.filter === 'indoor'">
      <div v-if="this.project.indoor === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
          <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
          <button v-if="project.inProgress === true" type="button" name="progress"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'outdoor'">
      <div v-if="this.project.indoor === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
          <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
          <button v-if="project.inProgress === true" type="button" name="progress"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'edible'">
      <div v-if="this.project.edible === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
          <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
          <button v-if="project.inProgress === true" type="button" name="progress"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'not-edible'">
      <div v-if="this.project.edible === false" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
          <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
          <button v-if="project.inProgress === true" type="button" name="progress"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'favourite'">
      <div v-if="this.project.favourite === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <h3>{{ project.commonName}}</h3>
          <p>Season: {{ project.growingSeason }}</p>
          <p>Grow Time: {{ project.growTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
          <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
          <button v-if="project.inProgress === true" type="button" name="progress"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
        </div>
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
      <div class="button-flex">
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
        <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
        <button v-if="project.inProgress === true" type="button" name="progress"
        @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
      </div>
    </div>
  </div>

  <div v-if="$route.params.filter === 'show-all'">
    <div class= "project-card"
    @click="handleClick">
    <router-link :to="{ name: 'instructions' }">
      <h3>{{ project.commonName}}</h3>
      <p>Season: {{ project.growingSeason }}</p>
      <p>Grow Time: {{ project.growTime }}</p>
    </router-link>
    <div class="button-flex">
      <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star-outline</v-icon></button>
      <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-star</v-icon></button>
      <button v-if="project.inProgress === false" type="button" name="progress" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-flower-tulip-outline</v-icon></button>
      <button v-if="project.inProgress === true" type="button" name="progress"
      @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon></button>
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
    'router': Router,
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
    display: table;
    border-radius: 25px;
    padding: 15px;
    margin: 10px;
    opacity: 1.0;
    display: flex;
    width: 40vh;
    flex-direction: column;
    height: 40vh;
    justify-content: space-between;
  }

  h3 {
    color: white;
    font-family: chaloops, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 36px;
  }

  p {
    color: white;
    font-family: sofia-pro, sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 24px;
  }

  a {
    text-decoration: none;
  }

  .project-card:hover {
    opacity: 0.7;
    filter:alpha(opacity=100);
  }

  .button-flex button {
    display: table-cell;
    vertical-align: bottom;
    margin-bottom: 5px;
  }

</style>
