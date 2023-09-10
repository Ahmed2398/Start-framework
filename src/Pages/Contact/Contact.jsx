import React from 'react';
import RepeatedTitle from "../../Components/Repeated/Repeated";
import './Contact.css'

const Contact = () => {

    return (
        <>
          <div className='title'>
            <RepeatedTitle title="CONATCT SECTION" color="var(--second-color)"/>
          </div>



          <div className="form container">
            <form action="Contact">
              <label  htmlFor="userName" className="position-relative">userName : </label>
              <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />

              <label  htmlFor="userAge" className="position-relative">userAge : </label>
              <input id="userAge" type="number" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />

              <label  htmlFor="userEmail" className="position-relative">userEmail : </label>
              <input  id="userEmail" type="email" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />

              <label  htmlFor="userPassword" className="position-relative">userPassword : </label>
              <input  id="userPassword" type="password" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-touched ng-dirty"   />

              <button  className="btn mt-4 text-white"> send Message </button>


            </form>
          </div>



        </>
          );
};

export default Contact;

