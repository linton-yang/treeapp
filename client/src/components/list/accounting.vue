<template>
    <header class="c-list-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-list-header-left-nav" href="/home"> <i class="fa fa-angle-left"></i>
                </a>
            </li>
            <span class="navbar-text c-list-header-text">
                我的账单
            </span>
            <li class="nav-item">
                <a class="nav-link c-list-header-right-action" href="/my/help"><i class="fa fa-question-circle-o"></i> </a>
            </li>
        </ul>
    </header>
    <div class="container mt-3">
        <div class="card shadow">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some example text. Some example text.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div><br />
        <div class="card shadow">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some example text. Some example text.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div><br />
        <div class="card shadow">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some example text. Some example text.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div><br />
        </div>
    </div>
</template>

<style>
.c-list-header{
    line-height: 1.5;
    background-color: #eff0f4;
}
.c-list-header-text{
    font-size: larger;
    color: #6c757d;
    font-weight: bolder;
}
.c-list-header-left-nav{
    text-align: left;
    font-size: 24px;
}
.c-list-header-right-action{
    text-align: right;
    font-size: 24px;
}
</style>
