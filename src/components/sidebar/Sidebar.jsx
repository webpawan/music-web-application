import React from 'react'
import  user from "../../images/user.webp"
const Sidebar = () => {
  return (
    <div className='sidebar'>
<div className="user">
  <div className="img__contaienr--user">
    <img src={user} alt="user " className='user__img' />
  </div>
  <p>user name</p> 
  <h5>user@gmail.com</h5>
</div>


<div className="navbar">
  <ul className="navbar__nav">
    <li className='nav__item'>Home</li>
    <li className='nav__item'>About</li>
    <li className='nav__item'>Top Arties</li>
    <li className='nav__item'>Top songs</li>
    <li className='nav__item'>contact Us</li>
  </ul>
</div>

    </div>
  )
}

export default Sidebar