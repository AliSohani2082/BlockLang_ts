import {IoIosCloseCircleOutline} from 'react-icons/io'
import { useState } from 'react'
import './App.css'
import { Header, BlockMenu, DraggableTabsList, TabList } from './components'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const files = useSelector(state => state.directory.files);
  return (
    <>
      <div className='flex flex-col align-items-stretch justify-start h-full m-0 p-0'>
        <Header/>
        <Routes>
          <Route path='/*' element={
            <div className='flex flex-row h-screen align-items-stretch'>
              <div className='bg-red-400 flex flex-col justify-start align-center gap-2 p-4'>
                {[0,1,2,3].map((item, i) => (
                  <div key={i} className='w-10 h-10 border'>{item}</div>
                ))}
              </div>
              <div className='flex flex-col w-full'>
                <div className='w-full h-10 px-2 flex flex-row justify-between align-items-center bg-blue-500'>
                  <div className='flex justify-center align-items-center h-full overflow-hidden'>
                    <TabList/>
                    {/* <DraggableTabsList/> */}
                  </div>
                  <div>config</div>
                </div>
                <Routes>
                  {files.filter((item) => item.name != "main").map((item, i) => (
                    <Route key={i} path={`/${item.name}`} element={
                      <div className='w-full h-full bg-pink-500'>
                        {item.content}
                      </div>
                    }/>
                  ))}

                </Routes>
              </div>
            </div>
          }/>
        </Routes>
      </div>
    </>
  )
}

export default App
