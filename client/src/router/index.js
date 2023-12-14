import {createRouter , createWebHistory} from 'vue-router';
import welcome from '../components/welcome/welcome.vue';
import home from '../components/home/home.vue';
import todoList from '../components/list/todo.vue';
import diaryList from '../components/list/diary.vue';
import accountingList from '../components/list/accounting.vue';
import treeHoleList from '../components/list/treeHole.vue';
import my from '../components/my/my.vue';
import store from '../components/my/store.vue';
import help from '../components/my/help.vue';
import setting from '../components/my/setting.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {path: '/' , component: welcome },
            {path: '/home' , component: home },
            {path: '/my' , component: my },
            {path: '/list/accounting' , component: accountingList },
            {path: '/list/diary' , component: diaryList },
            {path: '/list/todo' , component: todoList },
            {path: '/list/treehole' , component: treeHoleList },
            {path: '/my/store' , component: store },
            {path: '/my/help' , component: help },
            {path: '/my/setting' , component: setting },
        ]
    }
);

export default router;