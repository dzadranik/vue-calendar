<template lang="pug">
    tr 
        td
            img.vacation__employee-photo(:src="employee.img" alt="Employee image")
            .vacation__employee-name {{employee.name}}
        td {{employee.vacationDaysCount}}/28 {{this.calendarYear}}
        td(v-for="month in calendar" v-html="month")
</template>

<script>
import Calendar from "./Calendar";

export default {
    name: "Employee",
    props: ["employee", "calendarYear"],

    data: function() {
        return {
            calendar: Calendar(this.calendarYear).getYear(this.employee.id)
        };
    },

    beforeUpdate() {
        this.calendar = Calendar(this.calendarYear).getYear(this.employee.id);
    }
};
</script>
