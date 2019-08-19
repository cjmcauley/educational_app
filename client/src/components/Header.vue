<template lang="html">
<header>
  <div class="wrapper">

  <router-link :to="{ name: 'home'}"><v-img class="logo" src="@/assets/elements/logo.png"></v-img></router-link>
  <router-link :to="{ name: 'projects', params: { filter: 'favourite' } }">Favourites</router-link>
  <router-link :to="{ name: 'projects', params: {filter: 'progress'} }">In progress</router-link>
</div>
</header>


</template>

<script>
export default {
  name: 'web-header'
}
</script>

<style lang="css" scoped>
.wrapper{
  display: flex;
}
header{
  background-color: #E8B662;
  padding: 20px 5px;
  color: white;
}
.logo{
  width: 25%;
  height: auto;
}
a{
  text-decoration: underline #7FCBB0;
  color: white;
  font-size: 46px;
}

</style>
