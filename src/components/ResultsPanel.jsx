import StatusBar from "./StatusBar";
import ResultAccordion from "./ResultAccordion";

const ResultsPanel = () => {
    return (
        <>
            <StatusBar />
            <div className="w-full h-dvh">
                <ResultAccordion />
            </div>
        </>
    )
}

export default ResultsPanel;