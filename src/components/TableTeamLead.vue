<template lang="pug">
    div
        h1 {{title}}
        .dashboard
            button.dashboard__button(data-button-name="dashboard" :class="(activeButton === 'dashboard') ? 'active' : ''" @click="changeActiveButton($event)") Dashboard
            button.dashboard__button(data-button-name="timeLine" :class="(activeButton === 'timeLine') ? 'active' : ''" @click="changeActiveButton($event)") Team line up
        
        div(v-if="(activeButton === 'dashboard')")
            h2 calendar
        div(v-if="(activeButton === 'timeLine')")
            h2 time line up
</template>

<script>
export default {
    name: "TableTeamLead",
    data: function() {
        return {
            title: "Рабочий стол руководителя",
            activeButton: "dashboard"
        };
    },
    methods: {
        changeActiveButton: function(event) {
            if (this.activeButton !== event.toElement.dataset.buttonName)
                this.activeButton = event.toElement.dataset.buttonName;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixin/colors.scss";

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
        &.active {
            background: $color-background-active-button;
            color: $color-active-button;
        }
    }
}
</style>
