import React, { useState } from 'react'
import './styles.css'

const Menu = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='menu'>
      <div className='icon' onClick={() => setOpenMenu(!openMenu)}>
        <svg width="82" height="70" viewBox="0 0 90 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="90" height="18" rx="9" fill="#2E2B2B"/>
          <rect y="29" width="90" height="18" rx="9" fill="#2E2B2B"/>
          <rect y="58" width="90" height="18" rx="9" fill="#2E2B2B"/>
        </svg>
      </div>

      <div className='sidebar'>

      </div>
    </div>
  )
}

export default Menu 