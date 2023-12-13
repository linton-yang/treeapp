<template>
    <header class="c-new-header">
        <ul class="nav nav-pills nav-justified">
            <li class="nav-item">
                <a class="nav-link c-new-header-left-nav" href="/index"> <i class="fa fa-angle-left"></i> </a>
            </li>
            <span class="navbar-text c-new-header-text">
                树 洞
            </span>
            <li class="nav-item">
                <a class="nav-link c-new-header-right-action" href="#"><i class="fa fa-camera-retro"></i> </a>
            </li>
        </ul>
    </header>
    <template>
        <div class="container mt-3">
            <form action="">
                <div class="mb-3 mt-3">
                    <label for="Date" class="form-label">日期：</label>
                    <input type="Date" class="form-control" id="Date" placeholder="Enter Date" name="Date">
                </div>

                <div class="mb-3">
                    <label for="type" class="form-label">类型：</label>
                    <select class="form-select" aria-label="类型" id="type">
                        <option value="支出" selected>支出</option>
                        <option value="收入">收入</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">备注: </label>
                    <textarea class="form-control" placeholder="费用详情" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                    <label for="Number" class="form-label">金额：</label>
                    <input type="Number" class="form-control" id="Number" placeholder="填写金额" name="Number">
                </div>
                <div class="mb-3">
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-block">保存</button>
                    </div>
                </div>
            </form>
        </div>
    </template>

    <template>
        <div class="container mt-3">
            <form action="">
                <div class="mb-3 mt-3">
                    <label for="Date" class="form-label">日期：</label>
                    <input type="Date" class="form-control" id="Date" placeholder="Enter Date" name="Date">
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">事情: </label>
                    <textarea class="form-control" placeholder="今天的心情如何" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-block">保存</button>
                    </div>
                </div>
            </form>
        </div>
    </template>

    <template>
        <div class="container mt-3">
            <form action="">
                <div class="mb-3">
                    <label for="floatingTextarea">事情: </label>
                    <textarea class="form-control" placeholder="今天干点啥呢！" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-block">保 存</button>
                    </div>
                </div>
            </form>
        </div>
    </template>

    <template>
        <div class="container mt-3">
            <form action="">
                <div class="mb-3 mt-3">
                    <label for="Date" class="form-label">日期：</label>
                    <input type="Date" class="form-control" id="Date" placeholder="Enter Date" name="Date">
                </div>
                <div class="mb-3">
                    <label for="floatingTextarea">事情: </label>
                    <textarea class="form-control" placeholder="今天的心情如何" id="floatingTextarea"></textarea>
                </div>
                <div class="mb-3">
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-block">保存</button>
                    </div>
                </div>
            </form>
        </div>
    </template>
</template>

<style>
/* new style */
.c-treehole-header {
    text-align: center;
    line-height: 2.5;
    margin-top: 1rem;
}

.c-new-header {
    line-height: 2.2;
    background-color: #eff0f4;
}

.c-new-header-text {
    font-size: larger;
    color: #6c757d;
    font-weight: bolder;
}

.c-new-header-left-nav {
    text-align: left;
    font-size: 24px;
}

.c-new-header-right-action {
    text-align: right;
    font-size: 24px;
}</style>