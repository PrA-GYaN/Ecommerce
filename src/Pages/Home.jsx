import React from 'react'

const Home = () => {
  return (
    <>
    <section className="home bg-yellow-300 h-screen">
        <div className="display-produc h-4/5 p-3 flex gap-4">
            <div className="left-icon bg-cyan-500 w-10"></div>
            <div className="product-image bg-green-600 h-full flex-1"></div>
            <div className="right-icon bg-cyan-500 w-10 h-full"></div>
        </div>
        <div className="categories p-3 h-1/5">
            <div className="sub-categories bg-rose-600 h-full"></div>
        </div>
        <div className="sale"></div>

    </section>
    </>
  )
}

export default Home