import Vue from "vue";
import Router from "vue-router";
import TableTeamLead from "./components/TableTeamLead";
import VacationCalendar from "./components/VacationCalendar";
import Loader from "./components/Loader";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: TableTeamLead,
            children: [
                {
                    path: "/dashboard",
                    component: VacationCalendar
                },
                {
                    path: "/time-line",
                    component: Loader
                }
            ]
        }
    ]
});
