import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      
<div className="input__bar">
  <input type="text" className='search__input' placeholder='search song'/>
</div>
<div className="status__bar">
<button>signin</button>
</div>
    </div>
  )
}

export default Header