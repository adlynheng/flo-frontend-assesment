import Papa from "papaparse";
import { processCSV } from "./utils";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

self.onmessage = async function (e) {
  const csvFile = e.data;
  await wait(10000); // uncomment to simulate a long processing time
  Papa.parse(csvFile, {
    complete: (results, file) => {
      const processedData = processCSV(results.data);
      postMessage(processedData);
    },
  });
};
