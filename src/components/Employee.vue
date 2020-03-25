<template lang="pug">
    tr 
        td
            img.vacation__employee-photo(:src="employee.img" alt="Employee image")
            .vacation__employee-name {{employee.name}}
        td {{employee.vacationDaysCount}}/28
        td(v-for="month in calendar" v-html="month")
</template>

<script>
import Calendar from "@/components/js/Calendar";
const { getYear } = Calendar();

export default {
    name: "Employee",
    props: ["employee", "calendarYear"],

    computed: {
        calendar: function() {
            return getYear(this.employee.id, this.calendarYear);
        }
    }
};
</script>
