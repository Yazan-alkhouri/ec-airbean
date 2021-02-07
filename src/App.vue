<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Landing</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/menu">Menu</router-link>|
       <router-link to="/profile">Profile</router-link>|
       <router-link to="/status">Status</router-link>|
        -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
gjort
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #121480;

    &.router-link-exact-active {
      color: #ac0e23;
    }
  }
}
</style>
