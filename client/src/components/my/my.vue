<template>
    <header class="c-new-header">
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <router-link class="nav-link c-my-header-left-nav" to="/home"> <i class="fa fa-angle-left"></i> </router-link>
                </li>
                <span class="navbar-text c-my-header-text">
                    我 的 信 息
                </span>
                <li class="nav-item">
                    <router-link class="nav-link c-my-header-right-action" to="/my"><i class="fa fa-question-circle-o"></i> </router-link>
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
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/list/todo" ><i class="fa fa-calendar"></i> 待 办 </router-link></li>
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/list/diary" ><i class="fa fa-address-book"></i> 日 记 </router-link></li>
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/list/accounting" ><i class="fa fa-cart-plus"></i> 记 账 </router-link></li>
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/list/treehole" ><i class="fa fa-tree"></i> 树 洞 </router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-12 p-3">
                    <nav class="navbar bg-light">
                        <ul class="navbar-nav c-mentu-ul">
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/my/store" ><i class="fa fa-gift"></i> 积 分 商 城 </router-link></li>
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/my/help" ><i class="fa fa-info-circle"></i> 关 于 </router-link></li>
                            <li class="nav-item list-group-item"><router-link class="c-menu-link nav-link" to="/my/setting" ><i class="fa fa-cog"></i> 设 置 </router-link></li>
                        </ul>
                    </nav>
                </div>
        </div>
    </div>
</template>


<style scoped>
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