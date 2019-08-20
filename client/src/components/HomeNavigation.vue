<template lang="html">
  <div align="center">
    <h1 align="center">Grow it!</h1>
    <p align="center">The worlds best gardening app for children</p>


    <div class="menu">
      <div class="indoor">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'indoor' } }"> <v-img class="img" src="@/assets/icons/indoor.png"></v-img>Indoor</router-link>
      </div>
      <div class="outdoor">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'outdoor' } }"><v-img class="img" src="@/assets/icons/outdoor.png"></v-img>Outdoor</router-link>
      </div>
      <div class="edible">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'edible' } }"><v-img class="img" src="@/assets/icons/edible.png"></v-img>Edible</router-link>
      </div>
      <div class="not-edible">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'not-edible' } }"><v-img class="img" src="@/assets/icons/non-edible.png"></v-img>Not-edible</router-link>
      </div>
    </div>

    <router-link class="link-all" :to="{ name: 'projects', params: { filter: 'show-all'}}">

    <div  class="show-all">
      <h4>Show All</h4>
    </div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'home-nav'
}
</script>

<style lang="css" scoped>
h1 {
  font-family: chaloops, sans-serif;
font-weight: 600;
font-style: normal;
font-size: 50px;
color: #7FCBB0;
}

p {
  font-family: chaloops, sans-serif;
font-weight: 600;
font-style: normal;
color: #7FCBB0;
font-size: 20px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;


}

.menu > div {
  width: 20%;
  text-align: center;
  border: 5px solid #7FCBB0;
  border-radius: 25px;
  display: block;
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: 36px;
  cursor: pointer;
  text-align: center;
  color: #7FCBB0;
  font-family: chaloops, sans-serif;
  opacity: 0.7;

}

.menu > div:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}

a {
  text-decoration: none;
}

.link-text {
  color: #7FCBB0;
}

.show-all {
  width: 93%;
  background-color: #7FCBB0;
  padding: 14px 28px;
  font-size: 36px;
  cursor: pointer;
  text-align: center;
  font-family: chaloops, sans-serif;
  border-radius: 25px;
  color: white;
  opacity: 0.7;
}

.show-all:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}

.link-all {
  color: white;
}
</style>
