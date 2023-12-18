<template>
     <header class="c-list-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-list-header-left-nav" href="/home"> <i
                        class="fa fa-angle-left"></i> </a>
            </li>
            <span class="navbar-text c-list-header-text">
                积 分 商 城
            </span>
            <li class="nav-item">
                <a class="nav-link c-list-header-right-action" href="/my"><i class="fa fa-question-circle-o"></i> </a>
            </li>
        </ul>
    </header>

    <div class="container">
        <!-- 轮播 -->
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <!-- 指示符 -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active">.</button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1">.</button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2">.</button>
            </div>
            <!-- 轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" class="d-block"
                        style="width:100%">
                </div>
                <div class="carousel-item">
                    <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" class="d-block"
                        style="width:100%">
                </div>
                <div class="carousel-item">
                    <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" class="d-block"
                        style="width:100%">
                </div>
            </div>

            <!-- 左右切换按钮 -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>


        <div id="accordion show">
            <div class="card">
                <div class="card-header text-center">
                    <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                        -记 忆 周 边-
                    </a>
                </div>
                <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">
                                <div class="card">
                                    <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png"
                                        alt="Card image">
                                    <div class="card-body">
                                        <p class="card-text">Some example</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card">
                                    <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png"
                                        alt="Card image">
                                    <div class="card-body">
                                        <p class="card-text">Some example text </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header text-center">
                    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                        -- 猜 你 喜 欢 --
                    </a>
                </div>
                <div id="collapseTwo" class="collapse show" data-bs-parent="#accordion">
                    <div class="card-body">
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">
                                <div class="card">
                                    <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png"
                                        alt="Card image">
                                    <div class="card-body">
                                        <p class="card-text">Some example</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="card">
                                    <img class="card-img-top" src="https://static.runoob.com/images/mix/img_avatar.png"
                                        alt="Card image">
                                    <div class="card-body">
                                        <p class="card-text">Some example text </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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