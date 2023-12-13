<template>
  <welcome v-if="welcFlag" @welcome-badge="badgeOn"></welcome>
  <home v-if="homeFlag"></home>
</template>

<script>
  import welcome from './components/welcome/welcome.vue';
  import home from './components/home/home.vue';

  export default{
      components: {
        welcome,
        home,
      },
      data(){
        return {
          welcFlag : true,
          homeFlag : false,
          initTime : 5,
        }
      },
      methods: {
        badgeOn(){
          this.welcFlag = false;
          this.homeFlag = true;
        }
      },
      created(){
        setInterval(() =>{
          if(this.initTime <= 0) this.badgeOn();
          this.initTime--;
        }, 1000);
      }
  }

</script>
