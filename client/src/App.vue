<template lang="html">
  <div>
 <web-header />
    <router-view ></router-view>
  </div>

</template>

<script>
import ProjectService from './services/ProjectService.js';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    'web-header': Header
  }
  }
</script>

<style lang="css">
</style>
