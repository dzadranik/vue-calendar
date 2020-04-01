export default class Calendar {
    constructor() {
        this._todayDate = new Date();
        this._today = this._todayDate.getDate();
        this._todayMonth = this._todayDate.getMonth();
        this._todayYear = this._todayDate.getFullYear();
    }
    // daysInMonth-количество дней в месяце,
    // firstDay-день недели первого дня,
    // month-индекс месяца,
    // employeeId- id сотрудника для формирования js-month-** класса,
    // day- счетчик дней

    _setMonthInformation(monthIndex) {
        this._month = monthIndex;
        this._daysInMonth = new Date(this._year, monthIndex + 1, 0).getDate();
        let frD = new Date(this._year, monthIndex, 1).getDay();
        frD === 0 ? (this._firstDay = 6) : (this._firstDay = frD - 1); //сделать отсчет дней недели с понедельника
    }

    _getYearContent(i = 0, monthArray = []) {
        if (i < 12) {
            monthArray.push(this._getOneMonth(i));
            return this._getYearContent(i + 1, monthArray);
        } else {
            return monthArray;
        }
    }

    _getOneMonth(m) {
        this._day = 1;
        this._setMonthInformation(m);
        //js-month-{employeeId}-{month} формируется класс для поиска дня => отобразить event
        return `<div class="calendar__month js-month-${this._employeeId}-${m}"> 
						${this._getWeeks()}
					</div>`;
    }

    _getWeeks(i = 0, content = "") {
        if (this._day <= this._daysInMonth) {
            content += this._getOneWeek();
            return this._getWeeks(i + 1, content);
        } else {
            return content;
        }
    }

    _getOneWeek() {
        return `<div class="calendar__week">
					${this._getDays()}
				</div>`;
    }

    _getDays(i = 0, daysContent = "") {
        if (i < 7) {
            if (
                (this._firstDay > 0 && this._day < 7) ||
                this._day > this._daysInMonth
            ) {
                daysContent += this._getOneDay("calendar__empty");
                this._firstDay--;
            } else {
                daysContent += this._getOneDay("calendar__day");
            }
            return this._getDays(i + 1, daysContent);
        }
        return daysContent;
    }

    _getIsLastDay() {
        if (this._todayYear > this._year) return true;
        if (this._todayYear < this._year) return false;
        if (this._todayYear === this._year) {
            if (this._todayMonth < this._month) {
                return false;
            }
            if (this._todayMonth === this._month) {
                return this._day < this._today;
            }
            return true;
        }
    }

    _getOneDay(dayClass) {
        let isEmptyDay = this._dayClass === "calendar__empty",
            isLastDay = this._getIsLastDay();
        !isEmptyDay ? this._day++ : "";
        //чтобы не вводить лишнюю переменную сначала прибавить день, а в формировании класса его вычесть
        return `<div class="${dayClass} ${
            !isEmptyDay
                ? `js-day-${this._day - 1}-${this._month}-${this._employeeId}`
                : ``
        } ${
            isLastDay && !this._isEmptyDay ? "calendar__day--last" : ""
        }" ></div>`;
    }

    getYear(id, year) {
        this._employeeId = id;
        this._year = year;
        return this._getYearContent();
    }
}
