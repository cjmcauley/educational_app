<template lang="html">
  <div>
 <web-header />
    <router-view></router-view>
    <!-- <web-footer /> -->
  </div>
</template>

<script>
import ProjectService from './services/ProjectService.js';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { eventBus } from './main.js';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'app',
  components: {
    'web-header': Header,
    'project-card': ProjectCard,
    'web-footer': Footer
  }
</script>

<style lang="css">
</style>
