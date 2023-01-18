
enum DaysOfTheWeek {
    SUN=100, MON, TUE, WED, THU=105, FRI, SAT
}

let day: DaysOfTheWeek;
day = DaysOfTheWeek.SAT;

if (day == DaysOfTheWeek.SAT || day == DaysOfTheWeek.SUN) {
    console.log('Happy Weekend !!!');
}