import React, { Component } from 'react'
import RepeatedTitle from '../../Components/Repeated/Repeated'
import "./Home.css"
import svg from "./avatar.svg"


export default class Home extends Component {
  render() {
    return (
      <>
      <section className='start'>
            <picture>
                <img src={svg} alt="avatar" />
            </picture>

            <RepeatedTitle title="START FRAMEWORK" color="var(--white)"/>

            <p>Graphic Artist - Web Designer - Illustrator</p>

      </section>




      </>
    )
  }
}
