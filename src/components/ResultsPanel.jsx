import StatusBar from "./StatusBar";
import ResultAccordion from "./ResultAccordion";

const ResultsPanel = ({ data, dispatch }) => {
    return (
        <>
            <StatusBar dispatch={dispatch} totalStatements={data.length} totalReadings={data.reduce((acc,curr) => acc+curr.readings.length,0)}/>
            <div className="w-full h-dvh overflow-y-scroll overflow-x-visible">
                <ResultAccordion data={data}/>
            </div>
        </>
    )
}

export default ResultsPanel;