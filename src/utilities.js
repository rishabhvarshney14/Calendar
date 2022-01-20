import dayjs from 'dayjs'

export function getMonths(startYear, endYear, data) {
    let months = [];
    
    for (let year = startYear; year <= endYear; year++) {
      for (let month = 0; month < 12; month++) {

        const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
        let currentMonthCount = 0 - firstDayOfTheMonth;

        const daysMatrix = new Array(5).fill([]).map(() => {
          return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            const newDate = dayjs(new Date(year, month, currentMonthCount));
            if (data.hasOwnProperty(`${newDate.format('D')}-${newDate.format('M')}-${newDate.format('YY')}`)) {
              return [newDate, data[`${newDate.format('D')}-${newDate.format('M')}-${newDate.format('YY')}`]]
            }

            return [dayjs(new Date(year, month, currentMonthCount))];
          });
        });

        if (months.length !== 0) {
          let equal = true;
          for (let i=0; i<7; i++) {
            if (months.at(-1)[i][0].get('date') !== daysMatrix[0][i][0].get('date'))
              equal = false;
          }
          if (equal)
            months.push(...daysMatrix.slice(1));
          else
            months.push(...daysMatrix);
        }
        else
          months.push(...daysMatrix);
      }
    }

    return months;
  }