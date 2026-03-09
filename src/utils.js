import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const IGNORE_RECORD = ["100", "400", "500", "900"];

const formatDate = (date) => dayjs(date, "YYYYMMDD").format("YYYY-MM-DD");
const formatTime = (start, i, interval) =>
  start.add(i * interval, "minute").format("HH:mm:ss");

export const processCSV = (parsedCSV) => {
  // creates an object with the following structure:
  // [
  //   {
  //     nmi: string,
  //     n_readings: number,
  //     date: string,
  //     readings: [
  //       {
  //         time: string,
  //         value: number
  //       }, ...
  //     ],
  //   },
  // ]

  let result = [];
  let currentReadings = [];
  let currentNMI, currentDate, currentNReadings, currIntervalLength;

  for (const record of parsedCSV) {
    if (IGNORE_RECORD.includes(record[0])) continue;
    else if (record[0] === "200") {
      // update variables
      currentNMI = record[1];
      currIntervalLength = parseInt(record[8]);
      currentNReadings = 24 * (60 / currIntervalLength);
    } else if (record[0] === "300") {
      currentDate = formatDate(record[1]);
      const record_readings = record.slice(2, 2 + currentNReadings);
      const startTime = dayjs(currentDate, "YYYY-MM-DD").startOf("day");

      record_readings.forEach((value, i) => {
        const timestamp = `${currentDate} ${formatTime(
          startTime,
          i,
          currIntervalLength
        )}`;
        currentReadings.push({
          timestamp,
          value,
        });
      });

      result.push({
        nmi: currentNMI,
        n_readings: currentNReadings,
        date: currentDate,
        readings: currentReadings,
      });

      currentReadings = [];
    }
  }

  return result;
};
