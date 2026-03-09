import { Database } from 'lucide-react';
import Outlet from './components/Outlet.jsx';
import './App.css'

function App() {
  return (
    <>
      <header className='w-screen flex flex-row px-6 py-4 gap-4 shadow-md items-center absolute bg-white'>
        <Database color="var(--color-blue-600)" size={18}/>
        NEM12 CSV to SQL converter
      </header>
      <main className="flex flex-col h-dvh bg-slate-50 pt-20 pb-6">
        <Outlet />
      </main>
    </>
  )
}

export default App
