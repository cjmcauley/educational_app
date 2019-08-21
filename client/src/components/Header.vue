<template lang="html">
  <header>
    <div class="wrapper">

      <router-link :to="{ name: 'home'}"><v-img class="logo" src="@/assets/elements/logo.png"></v-img><h1 class="header">Grow It!</h1></router-link>
      <div class="mini-menu">
        <router-link class="menu" :to="{ name: 'projects', params: { filter: 'favourite' } }"><v-icon large color="#EA7E51">mdi-star</v-icon>Favourites</router-link>
        <router-link class="menu" :to="{ name: 'projects', params: {filter: 'progress'}  }"><v-icon large color="#FF8073">mdi-flower-tulip</v-icon>In progress</router-link>
      </div>
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
  justify-content: space-between;
}
header{
  background-color: #E8B662;
  padding: 10px 5px;
  color: white;
  width: 100%;
}
/* router-link {
  align-items: center;
} */
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
  float: right;
  align: right;
}
a {
  text-decoration: none;
  color: white;
  font-size: 26px;
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
}

.mini-menu {
  vertical-align: center;
  padding-right: 20px;
}


</style>
