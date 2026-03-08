import { useState } from 'react';
import { Database } from 'lucide-react';
import FileDropzone from './components/FileDropzone.jsx';
import Loading from './components/Loading.jsx';
import ResultsPanel from './components/ResultsPanel.jsx';
import './App.css'

function App() {

  // const [state, setState] = useState({})

  return (
    <>
      <header className='w-screen flex flex-row px-6 py-4 gap-4 shadow-md items-center absolute bg-white'>
        <Database color="var(--color-blue-600)" size={18}/>
        NEM12 CSV to SQL converter
      </header>
      <main className="flex flex-col h-dvh bg-slate-50 pt-20 pb-6">
        <ResultsPanel />
      </main>
    </>
  )
}

export default App
