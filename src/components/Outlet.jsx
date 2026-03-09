import { useState, useEffect, useReducer } from 'react';
import FileDropzone from './FileDropzone.jsx';
import Loading from './Loading.jsx';
import ResultsPanel from './ResultsPanel.jsx';
import { reducer, initialState, STATUS } from '../reducer.js';

const Outlet = () => {

    const [file, setFile] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (file) {
            const worker = new Worker(new URL('../csvToSqlWorker.js', import.meta.url), { type: "module" })
            worker.onmessage = (event) => {
                dispatch({ type: 'RESULT_PROCESSED', payload: event.data })
            }
            worker.postMessage(file)

            return () => worker.terminate();
        }
    }, [file])

    if (state.status === STATUS.IDLE) return <FileDropzone setFile={setFile} dispatch={dispatch}/>
    if (state.status === STATUS.LOADING) return <Loading fileName={file?.name}/>

    return <ResultsPanel data={state?.data} dispatch={dispatch}/>
}

export default Outlet;