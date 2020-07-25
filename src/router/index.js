import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store/index"

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: "/index",
            component: ()=>import("@/pages/Index")
        },{
            path: "/user/:userId",
            component: ()=>import("@/pages/User")
        },{
            path: "/create",
            component: ()=>import("@/pages/Create"),
            meta: {requireAuth:true}
        },{
            path: "/detail/:blogId",
            component: ()=>import("@/pages/Detail")
        },{
            path: "/edit/:blogId",
            component: ()=>import("@/pages/Edit"),
            meta: {requireAuth:true}
        },{
            path: "/my",
            component: ()=>import("@/pages/My"),
            meta: {requireAuth:true}
        },{
            path: "/register",
            component: ()=>import("@/pages/Register")
        },{
            path: "/login",
            component: ()=>import("@/pages/Login")
        }, {
            path: "/",
            redirect: "index"
        },{
            path: "*",
            component: ()=>import("@/pages/NotFound")
        }
    ]
})
router.beforeEach((to,from,next)=>{
    if (to.matched.some(record=>record.meta.requireAuth)){
        store.dispatch("checkLogin").then(isLogin=>{
            if (!isLogin){
                next({
                    path: '/login',
                    query: { redirect: to.fullPath }
                })
            }else {
                next()
            }
        })
    }else {
        next()
    }
})
export default router
