<template lang="pug">
    #app.wrapper
        TableTeamLead
</template>

<script>
import TableTeamLead from "./components/TableTeamLead";

export default {
    name: "App",
    components: {
        TableTeamLead
    }
};
</script>

<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/mixin/colors.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

html {
	height: 100%;
	overflow: visible;
}

body {
	font-family: 'Open Sans', sans-serif;
	font-size: 12px;
	color: $color-default;
	height: 100%;
}
h1 {
	font-size: 32px;
	margin: 10px 16px 20px;
}

.wrapper {
	width: 1080px;
	min-height: 100%;
	padding: 30px 20px;
	border-left: 100px solid $color-left-border;
}
</style>
