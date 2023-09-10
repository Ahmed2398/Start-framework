// Website Layout

import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from "../Pages/Home/./Home"

import "./Layout.css"



export default class Layout extends Component {
  render() {

    return (

        <>


        <section className='layOut'>
          <div className="navBar">
              <Navbar/>
          </div>

            <div className="body">
              <Outlet/>
            </div>


          <div className="footer">
              <Footer/>
          </div>
        </section>

        </>
    )
  }
}
