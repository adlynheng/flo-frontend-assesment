import { Loader, File, X } from 'lucide-react';

const Loading = () => {

    return (
        <div className="w-2xl">
            <p className='text-center text-sm text-zinc-500 font-medium mb-4'>Convert NEM12 electrical meter readings to SQL INSERT statements </p>
                <section className="flex flex-col bg-white outline-2 outline-dashed outline-neutral-200 py-24 rounded-md justify-center items-center">
                        <div className='flex justify-center'>
                            <div className='loader p-4 rounded-full'>
                                <Loader size={28} color="var(--color-blue-300)"/>
                            </div>
                        </div>
                        <p className='mb-1 font-semibold'>File processing ...</p>
                        <p className='text-xs text-zinc-500 mb-2'>Please wait while SQL statements are generated</p>
                        <div className='flex items-center gap-1 bg-slate-200 px-4 py-1 rounded-2xl'>
                            <File size={14} color="var(--color-slate-700)"/> 
                            <span className='text-sm mr-1 text-slate-700 font-medium'>meter_readings.csv</span> 
                            <X size={14} color="var(--color-slate-700)"/>
                        </div>
                </section>
            <span className='text-xs text-zinc-500'>Supported formats: CSV</span>
        </div>
    )

}

export default Loading;