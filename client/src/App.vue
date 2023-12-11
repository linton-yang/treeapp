<template>

    <template v-if="welcome">
        <h1 v-on:click="switchOn()">welcome</h1>
    </template>

    <template v-if="home">
      <h1 v-on:click="switchOn()">home</h1>
    </template>
  
</template>

<script>
export default {
  data() {
    return {
      welcome: true,
      home : false
    }
  },
  methods: {
    switchOn(){
      this.welcome = !this.welcome;
      this.home = !this.home
    }
  }
}
</script>

