import { Accordion } from '@base-ui/react/accordion';
import { ChevronDown } from 'lucide-react'

const ResultAccordion = ({ data }) => {
    return (
        <Accordion.Root multiple className="flex w-full flex-col justify-center outline outline-slate-200 rounded-lg">
            {
                data.map((e, index) => (
                    <Accordion.Item>
                        <Accordion.Header>
                            <Accordion.Trigger className="group flex w-full items-center justify-between border-y border-slate-200 bg-slate-100 py-2 pr-1 pl-3 text-left font-medium hover:bg-slate-200">
                            <div className="flex gap-4 items-center">
                                <div className="flex gap-1">
                                    <span className="font-medium text-sm text-zinc-500">Statement:</span>
                                    <span className="font-semibold font-mono text-sm">#{index+1}</span>
                                </div>
                                <div className="flex gap-1">
                                    <p className="font-medium text-sm text-zinc-500">NMI:</p>
                                    <span className="font-semibold font-mono text-sm text-green-600">{e.nmi}</span>
                                </div>
                                <div className="flex gap-1">
                                    <p className="font-medium text-sm text-zinc-500">Date:</p>
                                    <span className="font-semibold font-mono text-sm text-amber-600">{e.date}</span>
                                </div>
                                <div className='flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-2xl'>
                                    <span className='text-xs mr-1 text-slate-700 font-bold'>{e.readings.length} readings</span>
                                </div>
                            </div>
                            <ChevronDown className="mr-2 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-180"/>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 bg-white border-y border-slate-200 text-slate-600">
                            <div className="p-3 font-mono text-sm">
                                <pre className="whitespace-pre-wrap">
                                    <p><span className="text-purple-600">INSERT INTO meter_readings</span> (nmi, timestamp, consumption)</p>
                                    <p className="text-purple-600">VALUES</p>
                                    {
                                        e.readings.map((reading, i) => (
                                            <p key={`statement-${index}-reading-${i}`}>    (<span className="text-green-600">'{e.nmi}'</span>, <span className="text-amber-600">'{reading.timestamp}'</span>, <span className="text-cyan-600">{reading.value}</span>),</p> 
                                        ))
                                    }
                                </pre>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))
            }
        </Accordion.Root>
    )
}

export default ResultAccordion;
