import {IoIosCloseCircleOutline} from 'react-icons/io'
import { useState } from 'react'
import { Box } from '@mui/material'
// import './App.css'
import { Header } from './components'
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
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <Routes>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
      </Box>
    </>
  )
}

export default App
