import React, { useState } from 'react'

const BlockMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* pc sideBar */}
      <div className='md:flex hidden mt-10'>
        <ul>
          h
        </ul>
      </div>
      {/* mobile sideBar */}
      <div className='md:hidden block'>
        mobile side bar
      </div>
      
    </>
  )
}

export default BlockMenu