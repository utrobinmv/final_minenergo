<template>
  <div id="app">
    <div id="nav">
      <router-link to="/micro">Микро</router-link>
      <router-link to="/macro">Макро</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
p{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 15px;
  padding: 12px;
  border-bottom: 1px solid rgb(172, 172, 172);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>
