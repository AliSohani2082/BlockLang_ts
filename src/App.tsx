import {IoIosCloseCircleOutline} from 'react-icons/io'
import { useState } from 'react'
import './App.css'
import { Header, BlockMenu, DraggableTabsList, TabList } from './components'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'
import HomePage from './pages'

function App() {
  const [count, setCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const files = useSelector(state => state.directory.files);
  return (
    <>
      <div className='flex flex-col align-items-stretch justify-start h-full m-0 p-0'>
        <Header/>
        <Routes>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
