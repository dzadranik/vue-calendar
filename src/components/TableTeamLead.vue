<template lang="pug">
    div
        h1 {{title}}
        .dashboard
            button.dashboard__button.active Dashboard
            button.dashboard__button Team line up
</template>

<script>
export default {
    name: "TableTeamLead",
    props: {
        title: String
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
