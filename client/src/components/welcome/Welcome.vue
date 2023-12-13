<template>
    <body class="c-welcome-bg-img">
    <div class="container">
        <span class="badge pull-right c-welcome-badge" @click="badgeOn"> 跳 过 {{initTime}}</span>
    </div>
</body>
</template>

<script>
export default{
    data() {
        return {
            initTime : 5
        }
    },
    methods:{
        leftTime(){
           if(this.initTime >0 ) this.initTime--;
        },
        badgeOn(){
            this.$emit('welcome-badge');
        }
    },
    created (){
        setInterval(this.leftTime, 1000);
    }
}
</script>

<style>
.c-welcome-bg-img{
  background-image: url('../../assets/images/welcome.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.c-welcome-badge{
  font-size:x-large ;
  margin-top: 120px;
  float: right;
  padding-right: 12%;
}
</style>