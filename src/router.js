import Vue from "vue";
import Router from "vue-router";
import Office from "@/pages/Office";
import Home from "@/pages/Home";
import VacationCalendar from "@/components/VacationCalendar";
import Loader from "@/components/Loader";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: "/office/dashboard",
            component: Office,
            children: [
                {
                    path: "/office/dashboard",
                    component: VacationCalendar
                },
                {
                    path: "/office/time-line",
                    component: Loader
                }
            ]
        }
    ]
});
