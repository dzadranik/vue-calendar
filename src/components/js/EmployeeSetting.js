export default class EmployeeSetting {
    _addToContainer(content, containerSelector) {
        const container = document.querySelector(containerSelector);
        container.innerHTML += content;
    }

    _addEventsToCalendar(employee) {
        const { id, events } = employee;
        events.forEach(event => this._addOneEvent(event, id));
    }

    _addOneEvent(event, employeeId) {
        let { id, name, dateStart, dateEnd } = event,
            dateStartEvent = dateStart.split(".").map(parseFloat),
            dateEndEvent = dateEnd.split(".").map(parseFloat),
            startDay = dateStartEvent[0],
            startMonth = dateStartEvent[1],
            endDay = dateEndEvent[0],
            endMonth = dateEndEvent[1];

        const findDayContainer = (day, month) =>
            document.querySelector(`.js-day-${day}-${month - 1}-${employeeId}`);

        const addEventClassAndAttribute = (dayContainer, month) => {
            dayContainer.classList.add(`calendar__day--${name}`);
            dayContainer.setAttribute(
                "data-event-id",
                `${employeeId}-${id}-${month}`
            );
        };

        if (startMonth === endMonth) {
            for (let i = startDay; i <= endDay; i++) {
                addEventClassAndAttribute(
                    findDayContainer(i, startMonth),
                    startMonth - 1
                );
            }
        } else {
            for (let i = startDay; i <= 31; i++) {
                const dayContainer = findDayContainer(i, startMonth);

                if (dayContainer) {
                    addEventClassAndAttribute(dayContainer, startMonth - 1);
                }
            }
            for (let i = 1; i <= endDay; i++) {
                addEventClassAndAttribute(
                    findDayContainer(i, endMonth),
                    endMonth - 1
                );
            }
        }
    }

    _getCalendarEventContent(employeeInformation, eventInformation) {
        const { name, img } = employeeInformation,
            { name: eventName, dateStart, dateEnd } = eventInformation;
        return `<div class="calendar-event">
					<div class="calendar-event__employee">
						<img class="calendar-event__employee-photo" src="${img}" alt="Employee image">
						<div class="calendar-event__employee-name">${name}</div>
					</div>
					<div class="calendar-event__information">
						<div class="calendar-event__date calendar-event__date--${eventName}">
							${dateStart}.2020—${dateEnd}.2020 (14д.)
						</div>
						<div class="calendar-event__name">${this._getEventName(eventName)}</div>
					</div>
				</div>`;
    }

    _getEventName(name) {
        return name === "vacation"
            ? "отпуск"
            : name === "red"
            ? "красная метка"
            : name === "yellow"
            ? "желтая метка"
            : "";
    }
    displayEmployeesEvents(employeesArray) {
        employeesArray.forEach(employee => this._addEventsToCalendar(employee));
    }
    displayEventInformation(eventId, employeesArray) {
        //eventId[day, month, employeeId]
        let eventIdArray = eventId.split("-").map(parseFloat),
            eventDay = eventIdArray[0],
            eventMonth = eventIdArray[1],
            eventEmployeeId = eventIdArray[2],
            employeeInformation = employeesArray.find(
                item => item.id === eventDay
            ),
            eventInformation = employeeInformation.events.find(
                event => event.id === eventMonth
            );

        this._addToContainer(
            this._getCalendarEventContent(
                employeeInformation,
                eventInformation
            ),
            `.js-month-${employeeInformation.id}-${eventEmployeeId}`
        );
    }
}
