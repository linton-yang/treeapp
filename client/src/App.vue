<script>
  import welcome from './components/welcome/Welcome.vue';
  import home from './components/home/home.vue';

  export default{
      data(){
        return {
          currentComp :  welcome,
          initTime : 5,
        }
      },
      methods: {
        tabOn(){
          this.currentComp = home;
        }
      },
      created(){
        setInterval(() =>{
          if(this.initTime <= 0) this.currentComp = home;
          this.initTime--;
        }, 1000);
      }
  }

</script>

<template>
  <component :is="currentComp" @click="tabOn()"></component>
</template>
