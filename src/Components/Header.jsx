import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header py-10 bg-teal-400 flex justify-center items-center gap-14">
        <p className='font-medium text-3xl lato-bold-italic'>E-commerce</p>
        <input type="search" className='rounded-xl w-2/4 h-9 outline-none p-3' placeholder='Search Here'/>
        <div className="functions flex items-center gap-6 text-lg">
          <button className='lato'>LogIn</button>
        <button className='lato'>SignUp</button>
        </div>
        <div className="cart">Cart</div>
      </div>
    </>
  )
}

export default Header