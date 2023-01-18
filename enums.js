"use strict";
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 100] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 101] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 102] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 103] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 105] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 106] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 107] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.SAT;
if (day == DaysOfTheWeek.SAT || day == DaysOfTheWeek.SUN) {
    console.log('Happy Weekend !!!');
}
