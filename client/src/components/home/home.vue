<template>
    <template v-if="home">
        <!-- header background image -->
        <div class="c-index-bg-img"></div>

        <!-- Menu list tab -->
        <ul class="nav nav-tabs nav-justified justify-content-center c-index-nav-top-bg" role="tablist">
            <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#todo"> 待 办 </a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#account"> 账 本 </a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#treehole"> 树 洞 </a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#diary"> 日 记 </a></li>
        </ul>

        <!-- tab content -->
        <div class="tab-content c-index-content">
            <!-- sub menu content -->
            <div id="todo" class="c-index-ui-content container tab-pane active">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some example text. Some example text.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <br />
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some example text. Some example text.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <br />
            </div>
            <!-- sub menu content -->
            <div id="account" class="c-index-ui-content container tab-pane fade">
                <div class="c-index-div-content">
                    <div class="card">
                        <div class="card-body">简单的卡片</div>
                    </div>
                </div>
            </div>
            <!-- sub menu content -->
            <div id="treehole" class="c-index-ui-content container tab-pane fade">
                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
            <!-- sub menu content -->
            <div id="diary" class="c-index-ui-content container tab-pane fade">
                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
    </template>
    <myComp v-if="showMy"></myComp>
    <footComp></footComp>
</template>


<script>
    import myComp from '../my/my.vue';
    import footComp from './footer.vue';

    export default{
        components: {
            myComp,
            footComp
        },
        data(){
            return{
                home : true,
                showMy : false
            }
        },
        methods:{
            tabOn(){
                this.home = !this.home;
                this.showMy = !this.showMy;
            }
        }
    }
</script>

<style>
/* index style */
.c-index-bg-img{
  background-image: url('../../assets/images/welcome.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 195px;
  max-height: 200px;
}
.c-index-bg-img-self{
  width: 100%;
  height: inherit;
}
.c-index-ui-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.c-index-content{
  margin-top: 2.5rem;
}
.c-index-nav-bottom-bg{
  background-color: whitesmoke;
  border-top: groove;
  line-height: 2.5;
  align-items: center;
  font-weight: bold;
}
.c-index-nav-top-bg{
  background-color: #f3f6fa;
  border-top: groove;
  border-bottom: groove;
  font-weight: bold;
}
.c-index-menu-link{
  font-size: larger;
  font-weight: bolder;
  color: black;
}
a{text-decoration:none}
a:link {color:#000000;}      /* 未访问链接*/
a:visited {color:#000000;}  /* 已访问链接 */
a:hover {color:#000000;}  /* 鼠标移动到链接上 */
a:active {color:#000000;}  /* 鼠标点击时 */
</style>