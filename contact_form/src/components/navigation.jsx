import React from 'react'
import "../styles/navigation.css"
const navigation = () => {
  return (
    <>
    <nav className='container'>
        <div className='container-inner'>
            <div className="logo"><img src='/images/logo.png'/>
            </div>
            <div className='menu flex'>
                <div className="menu-items">HOME</div>
                <div className="menu-items">ABOUT</div>
                <div className="menu-items">CONTACT</div>    
            </div>
        </div>
    </nav>
    </>
  )
}

export default navigation