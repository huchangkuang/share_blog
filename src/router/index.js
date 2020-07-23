import Vue from "vue"
import VueRouter from "vue-router"
import Index from "@/pages/Index";
import User from "@/pages/User";
import Create from "@/pages/Create";
import Detail from "@/pages/Detail";
import Edit from "@/pages/Edit";
import My from "@/pages/My";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: "/index",
            component: Index
        },{
            path: "/user",
            component: User
        },{
            path: "/create",
            component: Create
        },{
            path: "/detail",
            component: Detail
        },{
            path: "/edit",
            component: Edit
        },{
            path: "/my",
            component: My
        },{
            path: "/register",
            component: Register
        },{
            path: "/login",
            component: Login
        }, {
            path: "/",
            redirect: "index"
        },{
            path: "*",
            component: NotFound
        }
    ]
})
export default router
