<template lang="pug">
    tr 
        td
            img.vacation__employee-photo(:src="employee.img" alt="Employee image")
            .vacation__employee-name {{employee.name}}
        td {{employee.vacationDaysCount}}
        td(v-for="month in calendar" v-html="month")
</template>

<script>
import Calendar from "./Calendar";
export default {
    name: "Employee",
    props: ["employee"],
    data: function() {
        return {
            calendar: ""
        };
    },

    mounted() {
        this.calendar = Calendar().getYear(this.employee.id);
    }
};
</script>
