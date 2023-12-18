<template>
    <!-- header background image -->
    <div class="c-index-bg-img">
        <!-- <img src="/images/welcome.png" class="d-block img-responsive" style="width:100%;height: inherit;"> -->
    </div>

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
    <!-- bottom menu list -->
    <div>
        <ul class="nav fixed-bottom c-index-ui-content c-index-nav-bottom-bg">
            <li><a href="/home"><i class="fa fa-home"></i> 首 页 </a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#myModal" ><i class="fa fa-plus-square"></i></a></li>
            <li><a href="/my"><i class="fa fa-user"></i> 我 的 </a></li>
        </ul>
    </div>


    <!-- 模态框 -->
    <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">选择新建的类型</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- 模态框内容 -->
                <div class="modal-body">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                          <a class="nav-link" href="/new/todo"><i class="fa fa-calendar"></i> 待办</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/new/diary"><i class="fa fa-address-book"></i> 日记</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/new/accounting"><i class="fa fa-cart-plus"></i> 记账</a> 
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/new/treehole"><i class="fa fa-tree"></i> 树洞</a>
                        </li>
                      </ul>
                </div>
                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">关闭</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{

        data(){
            return {
                diarys:[],
            }
        },
        methods:{
            async listDiary(){
                let sql = 'Select Id,LastName,FirstName From Lead Limit 10';
                await axios.post('http://localhost:4040/query', { sql })
                .then(response =>{
                    console.log(response);
                }).then(error => {
                    console.log(error);
                });
            },
        },
        created() {
            this.listDiary();
        }
    }
</script>

<style scoped> 
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