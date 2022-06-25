import Vue from "vue";
import VueRouter from "vue-router";
import DetailPage from '../views/DetailPage.vue'
import Home from '../views/Home.vue'
import Bibliotheque from '../views/Bibliotheque.vue'


Vue.use(VueRouter);

const routes = [
    {path:'/', component:Home, name:'home-page'},
    {path:'/info-formations', component:DetailPage, name:'detail-page'},
    {path:'/bibliotheque', component:Bibliotheque, name:'biblioPage'},

    
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
