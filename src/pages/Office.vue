<template lang="pug">
    div
        h1 Рабочий стол руководителя
        .dashboard
            router-link.dashboard__button(to='/office/dashboard') Dashboard
            router-link.dashboard__button(to="/office/time-line") Team line up
        router-view
</template>

<script>
import VacationCalendar from "@/components/VacationCalendar";

export default {
    name: "Office",
    components: {
        VacationCalendar
    }
};
</script>

<style lang="scss">
@import "@/styles/mixin/colors.scss";

.dashboard {
    padding: 6px 16px;
    background: $color-grey-background;
    margin-bottom: 22px;
    &__button {
        background: $color-white;
        border-radius: 2px;
        font-size: 14px;
        color: $color-active-button;
        line-height: 12px;
        border: none;
        outline: none;
        padding: 17px 36px 16px;
        margin-right: 20px;
        text-decoration: none;
        display: inline-block;
        &.router-link-active {
            background: $color-background-active-button;
            color: $color-active-button;
        }
    }
}
</style>
