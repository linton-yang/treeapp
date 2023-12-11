<template>

<div>
        <ul class="nav fixed-bottom c-index-ui-content c-index-nav-bottom-bg">
            <li><a href="/index"><i class="fa fa-home"></i> 首 页 </a></li>
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