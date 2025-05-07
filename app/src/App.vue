<template>
  <div id="app">
    <TheSidebar :isExpanded="isExpanded" />
    <main class="content">
    </main>
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue'

export default {
  name: 'App',
  components: {
    TheSidebar,
  },
  data() {
    return {
      isExpanded: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

.content {
  flex-grow: 1;
  margin-left: 130px;
  padding: 20px;
}
</style>
