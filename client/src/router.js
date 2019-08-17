import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Projects from '@/views/Projects.vue';
// import Slider from '@/views/Slider.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: App
    },
    {
      path: '/projects/:filter',
      name: 'projects',
      component: Projects
    }
    // {
    //   path: '/projects/:id',
    //   name: 'instructions',
    //   component: Slider
    // }
  ]
})

export default router;
