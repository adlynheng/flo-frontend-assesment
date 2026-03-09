import Dropzone from 'react-dropzone';
import { CloudUpload } from 'lucide-react';

const FileDropzone = ({ dispatch, setFile }) => {

    const handleDrop = (acceptedFiles) => {
        dispatch({ type: 'FILE_DROPPED' })
        setFile(acceptedFiles[0])
    }

    return (
        <div className="w-2xl">
            <p className='text-center text-sm text-zinc-500 font-medium mb-4'>Convert NEM12 electrical meter readings to SQL INSERT statements </p>
            <Dropzone onDrop={handleDrop} maxFiles={1} accept={{'text/csv':[".csv"]}}> 
                {({getRootProps, getInputProps, isDragActive}) => (
                    <section>
                        <div {...getRootProps()} className={`flex flex-col py-24 rounded-md justify-center items-center cursor-pointer transition-all ease-out ${isDragActive ? 'bg-blue-50 outline-blue-100 outline-2' : 'bg-white outline-2 outline-dashed outline-neutral-200'}`}>
                            <input {...getInputProps()} />
                            <div className='flex justify-center'>
                                <div className='bg-blue-100 p-4 rounded-full mb-2'>
                                    <CloudUpload size={28} color="var(--color-blue-600)"/>
                                </div>
                            </div>
                            <p>Drag & drop or <span className='text-md text-blue-600 font-semibold'>choose file to upload</span></p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <span className='text-xs text-zinc-500'>Supported formats: CSV</span>
        </div>
    )

}

export default FileDropzone;