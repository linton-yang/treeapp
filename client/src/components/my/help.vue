<template>
    <header class="c-list-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-list-header-left-nav" href="/my"> <i class="fa fa-angle-left"></i> </a>
            </li>
            <span class="navbar-text c-list-header-text">
                使用帮助
            </span>
            <li class="nav-item">
                <a class="nav-link c-list-header-right-action" href="/home"><i class="fa fa-question-circle-o"></i> </a>
            </li>
        </ul>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索想要查询的内容">
        </div>
    </header>
    <div class="container mt-3">
        <h4>使用过程</h4>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">怎样删除日记记录？</a>
            <a href="#" class="list-group-item list-group-item-action">在哪里查看每个月账单？</a>
            <a href="#" class="list-group-item list-group-item-action">在树洞里发言所有人都可以看到吗？</a>
            <a href="#" class="list-group-item list-group-item-action">如何标记已经完成额事情？</a>
        </div>
        <br/>
        <h4>信任和安全</h4>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">使用过程中，我的个人信息安全吗？</a>
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