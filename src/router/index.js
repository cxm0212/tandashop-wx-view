import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home';

Vue.use(VueRouter);


const home = {
    path:'/',
    name:'home',
    component:Home
}

const routes = [home,]

const router = new VueRouter({
    routes : routes
})

export default router;