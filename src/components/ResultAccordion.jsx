import { Accordion } from '@base-ui/react/accordion';
import { ChevronDown } from 'lucide-react'

// border-b border-slate-200

const ResultAccordion = () => {
    return (
        <Accordion.Root multiple className="flex w-full flex-col justify-center outline outline-slate-200 rounded-lg">
            <Accordion.Item>
            <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between border-y border-slate-200 bg-slate-100 py-2 pr-1 pl-3 text-left font-medium hover:bg-slate-200">
                <div className="flex gap-4 items-center">
                    <div className="flex gap-1">
                        <span className="font-medium text-sm text-zinc-500">Statement:</span>
                        <span className="font-semibold font-mono text-sm">#1</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">NMI:</p>
                        <span className="font-semibold font-mono text-sm text-green-600">NEM1201009</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">Date:</p>
                        <span className="font-semibold font-mono text-sm text-amber-600">2024-04-01</span>
                    </div>
                    <div className='flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-2xl'>
                        <span className='text-xs mr-1 text-slate-700 font-bold'>48 readings</span>
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
                    <p>    (<span className="text-green-600">'NEM1201009'</span>, <span className="text-amber-600">'2024-03-01 00:00:00'</span>, <span className="text-cyan-600">0.230</span>),</p> 
                    <p>    ('NEM1201009', '2024-03-01 00:30:00', 1.485),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:00:00', 0.677),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:30:00', 1.107),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:00:00', 0.108),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:30:00', 0.947),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:00:00', 1.709),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:30:00', 1.722),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:00:00', 0.900),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:30:00', 0.418),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:00:00', 1.734),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:30:00', 0.667),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:00:00', 0.538),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:30:00', 0.169),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:00:00', 1.468),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:30:00', 1.474),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:00:00', 1.648),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:30:00', 1.060),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:00:00', 0.151),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:30:00', 0.840),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:00:00', 1.764),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:30:00', 8.102),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:00:00', 0.630),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:30:00', 2.099),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:00:00', 1.892),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:30:00', 1.940);</p> 
                </pre>
                </div>
            </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
            <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between bg-slate-100 py-2 pr-1 pl-3 text-left font-medium hover:bg-slate-100">
                <div className="flex gap-4 items-center">
                    <div className="flex gap-1">
                        <span className="font-medium text-sm text-zinc-500">Statement:</span>
                        <span className="font-semibold font-mono text-sm">#1</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">NMI:</p>
                        <span className="font-semibold font-mono text-sm text-green-600">NEM1201009</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">Date:</p>
                        <span className="font-semibold font-mono text-sm text-amber-600">2024-04-01</span>
                    </div>
                    <div className='flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-2xl'>
                        <span className='text-xs mr-1 text-slate-700 font-bold'>48 readings</span>
                    </div>
                </div>
                <ChevronDown className="mr-2 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-180"/>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 bg-white border-t border-slate-200 text-slate-600">
                <div className="p-3 font-mono text-sm">
                <pre className="whitespace-pre-wrap">
                    <p><span className="text-purple-600">INSERT INTO meter_readings</span> (nmi, timestamp, consumption)</p>
                    <p className="text-purple-600">VALUES</p>
                    <p>    (<span className="text-green-600">'NEM1201009'</span>, <span className="text-amber-600">'2024-03-01 00:00:00'</span>, <span className="text-cyan-600">0.230</span>),</p> 
                    <p>    ('NEM1201009', '2024-03-01 00:30:00', 1.485),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:00:00', 0.677),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:30:00', 1.107),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:00:00', 0.108),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:30:00', 0.947),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:00:00', 1.709),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:30:00', 1.722),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:00:00', 0.900),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:30:00', 0.418),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:00:00', 1.734),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:30:00', 0.667),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:00:00', 0.538),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:30:00', 0.169),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:00:00', 1.468),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:30:00', 1.474),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:00:00', 1.648),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:30:00', 1.060),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:00:00', 0.151),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:30:00', 0.840),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:00:00', 1.764),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:30:00', 8.102),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:00:00', 0.630),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:30:00', 2.099),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:00:00', 1.892),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:30:00', 1.940);</p> 
                </pre>
                </div>
            </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
            <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between bg-slate-100 py-2 pr-1 pl-3 text-left font-medium hover:bg-slate-100">
                <div className="flex gap-4 items-center">
                    <div className="flex gap-1">
                        <span className="font-medium text-sm text-zinc-500">Statement:</span>
                        <span className="font-semibold font-mono text-sm">#1</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">NMI:</p>
                        <span className="font-semibold font-mono text-sm text-green-600">NEM1201009</span>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-medium text-sm text-zinc-500">Date:</p>
                        <span className="font-semibold font-mono text-sm text-amber-600">2024-04-01</span>
                    </div>
                    <div className='flex items-center gap-1 bg-slate-200 px-3 py-1 rounded-2xl'>
                        <span className='text-xs mr-1 text-slate-700 font-bold'>48 readings</span>
                    </div>
                </div>
                <ChevronDown className="mr-2 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-180"/>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 bg-white border-t border-slate-200 text-slate-600">
                <div className="p-3 font-mono text-sm">
                <pre className="whitespace-pre-wrap">
                    <p><span className="text-purple-600">INSERT INTO meter_readings</span> (nmi, timestamp, consumption)</p>
                    <p className="text-purple-600">VALUES</p>
                    <p>    (<span className="text-green-600">'NEM1201009'</span>, <span className="text-amber-600">'2024-03-01 00:00:00'</span>, <span className="text-cyan-600">0.230</span>),</p> 
                    <p>    ('NEM1201009', '2024-03-01 00:30:00', 1.485),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:00:00', 0.677),</p> 
                    <p>    ('NEM1201009', '2024-03-01 01:30:00', 1.107),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:00:00', 0.108),</p> 
                    <p>    ('NEM1201009', '2024-03-01 02:30:00', 0.947),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:00:00', 1.709),</p> 
                    <p>    ('NEM1201009', '2024-03-01 03:30:00', 1.722),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:00:00', 0.900),</p> 
                    <p>    ('NEM1201009', '2024-03-01 04:30:00', 0.418),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:00:00', 1.734),</p> 
                    <p>    ('NEM1201009', '2024-03-01 05:30:00', 0.667),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:00:00', 0.538),</p> 
                    <p>    ('NEM1201009', '2024-03-01 06:30:00', 0.169),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:00:00', 1.468),</p> 
                    <p>    ('NEM1201009', '2024-03-01 07:30:00', 1.474),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:00:00', 1.648),</p> 
                    <p>    ('NEM1201009', '2024-03-01 08:30:00', 1.060),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:00:00', 0.151),</p> 
                    <p>    ('NEM1201009', '2024-03-01 09:30:00', 0.840),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:00:00', 1.764),</p> 
                    <p>    ('NEM1201009', '2024-03-01 10:30:00', 8.102),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:00:00', 0.630),</p> 
                    <p>    ('NEM1201009', '2024-03-01 11:30:00', 2.099),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:00:00', 1.892),</p> 
                    <p>    ('NEM1201009', '2024-03-01 12:30:00', 1.940);</p> 
                </pre>
                </div>
            </Accordion.Panel>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export default ResultAccordion;
