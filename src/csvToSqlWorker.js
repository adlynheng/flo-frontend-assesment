import Papa from "papaparse";
import { processCSV } from "./utils";

self.onmessage = function (e) {
  const csvFile = e.data;
  Papa.parse(csvFile, {
    complete: (results, file) => {
      console.log(results.data);
      const processedData = processCSV(results.data);
      postMessage(processedData);
    },
  });
};
