import * as React from 'react';
import './apply.css';


export default function ApplyCard() {
    return(
        <>
       <div className="frm">
          <div className="frm-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      







{/* <section className="vh-100" style={{ backgroundColor: '#2779e2' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Apply for a job</h1>
            <div className="card" style={{ borderRadius: '15px' }}>
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Full name</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Email address</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Message</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <textarea className="form-control" rows="3" placeholder="Message sent to the employer"></textarea>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload CV</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                    <div className="small text-muted mt-2">
                      Upload your CV/Resume or any other relevant file. Max file size 50 MB
                    </div>
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}


{/* <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Upload UG Certificate</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
                <div className="small text-muted mt-2">
                  Upload your UG Certificate. Max file
                  size 50 MB
                </div>
              </div>
            </div> */}

        
        </>

    )
} 