<template>
     <header class="c-new-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-my-header-left-nav" onclick="javascript:navBack();"> <i class="fa fa-angle-left"></i> </a>
            </li>
            <span class="navbar-text c-my-header-text">
                我 的 信 息
            </span>
            <li class="nav-item">
                <a class="nav-link c-my-header-right-action" href="/index"><i class="fa fa-question-circle-o"></i> </a>
            </li>
        </ul>
    </header>
    
    <div class="container">
        <div class="row">
            <div class="col-12 p-3">
                <img src="https://static.runoob.com/images/mix/cinqueterre.jpg" class="rounded-circle mx-auto d-block c-img" alt="Cinque Terre"> 
            </div>
            <div class="col-12 p-3">
                <nav class="navbar bg-light">
                    <ul class="navbar-nav c-mentu-ul">
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/list/todo"><i class="fa fa-calendar"></i> 待 办 </a></li>
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/list/diary"><i class="fa fa-address-book"></i> 日 记 </a></li>
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/list/accounting"><i class="fa fa-cart-plus"></i> 记 账 </a></li>
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/list/treehole"><i class="fa fa-tree"></i> 树 洞 </a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-12 p-3">
                <nav class="navbar bg-light">
                    <ul class="navbar-nav c-mentu-ul">
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/my/store"><i class="fa fa-gift"></i> 积 分 商 城 </a></li>
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/my/help"><i class="fa fa-info-circle"></i> 关 于 </a></li>
                        <li class="nav-item list-group-item"><a class="c-menu-link nav-link" href="/my/setting"><i class="fa fa-cog"></i> 设 置 </a></li>
                    </ul>
                </nav>
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