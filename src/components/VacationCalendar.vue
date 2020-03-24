<template lang="pug">
div
    .vacation__header
        h2.vacation__header-title {{title}}
        div
            button.vacation__header-button(@click="decreaseYear")
                <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Head-dashboard-1368" transform="translate(-960.000000, -273.000000)">
                            <g id="ic-left" transform="translate(952.000000, 267.000000)">
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M14.71,6.71 C14.32,6.32 13.69,6.32 13.3,6.71 L8.71,11.3 C8.32,11.69 8.32,12.32 8.71,12.71 L13.3,17.3 C13.69,17.69 14.32,17.69 14.71,17.3 C15.1,16.91 15.1,16.28 14.71,15.89 L10.83,12 L14.71,8.12 C15.1,7.73 15.09,7.09 14.71,6.71 Z" id="Path" fill="#000000" fill-rule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            span.vacation__header-year {{tableYear}}
            button.vacation__header-button(@click="increaseYear")
                <svg width="7px" height="12px" viewBox="0 0 7 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Head-dashboard-1368" transform="translate(-1043.000000, -273.000000)">
                            <g id="ic-right" transform="translate(1034.000000, 267.000000)">
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M9.29,6.71 C8.9,7.1 8.9,7.73 9.29,8.12 L13.17,12 L9.29,15.88 C8.9,16.27 8.9,16.9 9.29,17.29 C9.68,17.68 10.31,17.68 10.7,17.29 L15.29,12.7 C15.68,12.31 15.68,11.68 15.29,11.29 L10.7,6.7 C10.32,6.32 9.68,6.32 9.29,6.71 Z" id="Path" fill="#000000" fill-rule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                </svg>
    table.vacation__table
        thead.vacation__table-header
            tr
                td(v-for="name in tableHeaderNames") {{name}}

        tbody.vacation__table-body.js-vacation-table
            Employee(v-for="item in employeeInformation" v-bind:employee="item" :key="item.id")
</template>

<script>
import Employee from "./Employee";
export default {
    name: "VacationCalendar",
    components: {
        Employee
    },
    data: function() {
        return {
            title: "График отпусков",
            tableYear: 2020,
            tableHeaderNames: [
                "Фамилия, Имя",
                "дней",
                "Янв",
                "Фев",
                "Мар",
                "Апр",
                "Май",
                "Июн",
                "Июл",
                "Авг",
                "Сент",
                "Окт",
                "Ноя",
                "Дек"
            ],
            employeeInformation: {},
            isLoadet: ""
        };
    },
    mounted() {
        fetch(
            "https://dzadranik.github.io/i-dex/src/json/vacation-calendar.json"
        )
            .then(res => res.json())
            .then(
                result => {
                    this.isLoaded = true;
                    this.employeeInformation = result;
                },
                error => {
                    this.isLoaded = true;
                    error;
                }
            );
    },
    methods: {
        increaseYear: function() {
            if (this.tableYear < 2023) this.tableYear++;
        },
        decreaseYear: function() {
            if (this.tableYear > 2017) this.tableYear--;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/mixin/colors.scss";

.vacation {
    &__header {
        background: $color-grey-background;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 17px 5px 11px 20px;
    }
    &__header-title {
        font-size: 18px;
    }
    &__header-year {
        font-size: 18px;
        margin: 0 11px;
    }
    &__header-button {
        background: transparent;
        border: none;
        outline: none;
    }
    &__table {
        width: 100%;
        margin-bottom: 60px;
        text-align: center;
        tr {
            border-bottom: 1px solid $color-grey-background;
        }
    }
    &__table-header {
        background: $color-grey-background;
        font-size: 10px;
        text-align: center;
        td {
            padding: 6px 0 8px;
            &:first-child {
                text-align: left;
                padding-left: 20px;
            }
        }
    }
    &__table-body {
        td {
            padding: 0;
            vertical-align: middle;
            &:first-child {
                text-align: left;
            }
            &:nth-child(1),
            &:nth-child(2) {
                padding-right: 10px;
            }
        }
    }
    &__employee-photo {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 8px;
    }
    &__employee-name {
        display: inline-block;
        width: 40px;
    }
}

.calendar {
    &__month {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px 0;
        position: relative;
        &:hover {
            .calendar-event {
                display: block;
            }
        }
    }
    &__week {
        display: flex;
        width: 8px;
        height: 16px;
        flex-direction: column;
        margin: 0 1px;
    }
    &__empty {
        width: 100%;
        height: 100%;
    }
    &__day {
        width: 100%;
        height: 100%;
        background: $color-free-event;
        &--last {
            background: $color-last-day;
        }
        &--vacation {
            background: $color-vacation-event;
        }
        &--red {
            background: $color-red-event;
        }
        &--yellow {
            background: $color-yellow-event;
        }
    }
}

.calendar-event {
    position: absolute;
    padding: 17px;
    box-shadow: 0 0 4px 0 rgba(107, 107, 107, 0.5);
    border-radius: 4px;
    background: $color-white;
    width: 345px;
    height: 146px;
    z-index: 9;
    text-align: left;
    top: calc(100% + 5px);
    left: calc(100% - 20px);
    display: none;
    &__employee {
        display: flex;
        align-items: flex-start;
        margin-bottom: 17px;
    }
    &__employee-photo {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        margin-right: 16px;
    }
    &__employee-name {
        font-size: 14px;
        font-weight: bold;
        color: $color-black;
        width: 60px;
    }
    &__date {
        color: $color-black;
        font-size: 14px;
        border-left: 12px solid $color-white;
        padding-left: 8px;
        height: 16px;
        line-height: 16px;
        margin-bottom: 2px;
        &--vacation {
            border-left-color: $color-vacation-event;
        }
        &--red {
            border-left-color: $color-red-event;
        }
        &--yellow {
            border-left-color: $color-yellow-event;
        }
    }
    &__name {
        font-size: 14px;
        color: #aeaeae;
        padding-left: 20px;
    }
}
</style>
