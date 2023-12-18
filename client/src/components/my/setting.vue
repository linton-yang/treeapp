<template>
        <header class="c-list-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-list-header-left-nav" herf="/home"> <i
                        class="fa fa-angle-left"></i> </a>
            </li>
            <span class="navbar-text c-list-header-text">
                我 的 设 置
            </span>
            <li class="nav-item">
                <a class="nav-link c-list-header-right-action" href="/my"><i class="fa fa-question-circle-o"></i> </a>
            </li>
        </ul>
    </header>
    <div class="container mt-3">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">短信通知</a>
            <a href="#" class="list-group-item list-group-item-action">手机号</a>
            <a href="#" class="list-group-item list-group-item-action">授权信息</a>
            <a href="#" class="list-group-item list-group-item-action">服务条款</a>
            <a href="#" class="list-group-item list-group-item-action">隐私政策</a>
            <a href="#" class="list-group-item list-group-item-action">反馈</a>
        </div>
        <br/>
        <div class="mb-3">
            <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-block">保存</button>
            </div>
        </div>
    </div>
</template>

<style>
.c-new-header{
  line-height: 1.5;
  background-color: #eff0f4;
}
.c-my-header-text{
  font-size: larger;
  color: #6c757d;
  font-weight: bolder;
}
.c-my-header-left-nav{
  text-align: left;
  font-size: 24px;
}
.c-my-header-right-action{
  text-align: right;
  font-size: 24px;
}

.c-ui-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.c-nav-bottom-bg{
  background-color: whitesmoke;
  border-top: groove;
  line-height: 2.5;
  align-items: center;
  font-weight: bold;
}
.c-mentu-ul{
  width: 100%;
}
.c-img{
  height: 150px;
  width: 150px;
}
.c-menu-link{
  font-size: larger;
  font-weight: bolder;
  color: black;
}
</style>