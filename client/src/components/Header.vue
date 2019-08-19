<template lang="html">
<header>

  <router-link :to="{ name: 'home'}"><h1>Home</h1></router-link>
  <router-link :to="{ name: 'projects', params: { filter: 'favourite' } }">Favourites</router-link>
  <router-link :to="{ name: 'projects', params: {filter: 'progress'} }">In progress</router-link>
</header>


</template>

<script>
export default {
  name: 'web-header'
}
</script>

<style lang="css" scoped>

header{
  background-color: #E8B662;
  padding: 20px 5px;
  color: white;
}

</style>
