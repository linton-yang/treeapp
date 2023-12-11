<script setup>
import IndexFooter from './IndexFooter.vue'
</script>

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
    <IndexFooter></IndexFooter>
</template>