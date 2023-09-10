import React from 'react';
import RepeatedTitle from "../../Components/Repeated/Repeated";
import './About.css'
const About = () => {
    return (
        <>
          <section className='about'>

            <RepeatedTitle title="ABOUT COMPONENT" color="var(--white)"/>

            <div className="content container">
              <div className=" col-md-6 col-lg-6 col-sm-12">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="right-side col-md-6 col-lg-6 col-sm-12">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>





            </div>


          </section>

        </>
    );
};

export default About;
