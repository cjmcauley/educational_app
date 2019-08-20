<template lang="html">
  <header>
    <div class="wrapper">

      <router-link :to="{ name: 'home'}"><v-img class="logo" src="@/assets/elements/logo.png"></v-img><h1 class="header">Grow It!</h1></router-link>
      <router-link class="menu" :to="{ name: 'projects', params: { filter: 'favourite' } }">Favourites</router-link>
      <router-link class="menu" :to="{ name: 'projects', params: {filter: 'progress'}  }">In progress</router-link>
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
  vertical-align: middle;
}
header{
  background-color: #E8B662;
  padding: 10px 5px;
  color: white;
}
router-link {
  align-items: center;
}
h1{
  float: left;
  font-family: chaloops, sans-serif;
}
.logo{
  float: left;
  width: 15%;
  height: auto;
  align: center;
}
.header{
  font-size: 66px;
}
.menu{
  padding-left: 15px;
  align-self: ;
}
a {
  text-decoration: none;
  color: white;
  font-size: 26px;
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
}

</style>
