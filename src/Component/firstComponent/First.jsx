import React from 'react'

const First = () => {
  return (
    <>
        <header id="header">
      <div className="header-left">
        <i id="icon" className="fab fa-facebook"></i>
        <i id="icon" className="fab fa-twitter"></i>
        <i id="icon" className="fab fa-instagram"></i>
      </div>
      <div className="header-right">
        <i id="icon" className="fas fa-search"></i>
        <button id="login-btn">LOGIN</button>
      </div>
    </header>
    <div className="headerM">
      <i id="icon" className="fas fa-search"></i>
      <img src="src/assets/images/Logo 2.png" alt="logo" className="logo"/>
      <i className="fa-solid fa-bars"></i>
    </div>
    <section1 className="sect1">
      <img src="src/assets/images/Logo 2.png" alt="logo" className="logo"/>
      <div className="home">
        <p>Homepage </p>
        <p>Recipe Page</p>
        <p>Pages</p>
        <p>Buy</p>
      </div>
    </section1>
    <section className="sect">
      <img src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_1280.jpg" alt="first-image" className="first"/>
      <div className="first-img">
        <p className="i">85% would make his again</p> <br/>
        <p className="size">Cinnamon Apple <br/>Loaded tart</p>
      </div>
    </section>
    </>
  )
}

export default First