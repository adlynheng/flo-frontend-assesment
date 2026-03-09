import { Button } from '@base-ui/react/button';
import { Download, Undo2 } from 'lucide-react';

const StatusBar = ({ totalStatements, totalReadings, dispatch }) => {
    return (
        <div className="w-full flex justify-between items-center rounded-lg bg-white border border-zinc-200 py-2 pl-4 pr-2 mb-6">
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <span className="font-light text-sm text-zinc-500 leading-6">Total INSERT statements:</span>
                    <span className="font-mono text-blue-600">{totalStatements}</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-light text-sm text-zinc-500 leading-6">Total readings:</p>
                    <span className="font-mono text-emerald-700">{totalReadings}</span>
                </div>
                <div className="flex gap-1">
                    <p className="font-light text-sm text-zinc-500 leading-6">Unique NMIs:</p>
                    <span className="font-mono text-purple-700">4</span>
                </div>
            </div>
            <div className="flex gap-2">
                <Button className="flex gap-2 items-center py-1 px-4 border border-neutral-200 text-zinc-500 text-sm font-medium rounded-lg hover:bg-neutral-100" onClick={() => dispatch({ type: "RESET" })}>
                    <Undo2 size={16}/>
                    New file
                </Button>
                <Button className="flex gap-2 items-center py-1 px-4 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                    <Download size={16}/>
                    Download .sql
                </Button>
            </div>
        </div>
    )
}

export default StatusBar;