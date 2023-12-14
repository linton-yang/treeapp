<template>
    <body>
        <div>
            <span class="badge pull-right c-welcome-badge" > 
                <router-link to="/home">跳 过 {{initTime}}</router-link>
            </span>
        </div>
    </body>
</template>

<script>

export default{
    data() {
        return {
            initTime: 5,
        };
    },
    methods: {
        leftTime() {
            if (this.initTime > 0)
                this.initTime--;
        }
    },
    created() {
        setInterval(this.leftTime, 1000);
    },
}
</script>

<style scoped>
html, body{
    width: 100%;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    margin: 0%;
    background: url('../../assets/images/welcome.png') no-repeat center center fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
}
.c-welcome-bg-img{
    background-repeat: "no-repeat";
    background-size: "cover";
}
.c-welcome-badge{
  font-size:x-large ;
  margin-top: 120px;
  float: right;
  padding-right: 12%;
}
a{text-decoration:none}
a:link {color:white;}      /* 未访问链接*/
a:visited {color:white;}  /* 已访问链接 */
a:hover {color:white;}  /* 鼠标移动到链接上 */
a:active {color:white;}  /* 鼠标点击时 */
</style>