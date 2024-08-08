export function noOfWeeksInAYears(years) {
    const daysInRegularYear = 365;
    const daysInLeapYear = 366;
    let totalDays = 0;
    for (let i = 0; i < years; i++) {
      const year = new Date().getFullYear() + i;
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        totalDays += daysInLeapYear;
      } else {
        totalDays += daysInRegularYear;
      }
    }
    return Math.floor(totalDays / 7);
  }
  