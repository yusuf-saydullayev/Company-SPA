import React from "react";
import "../Contact.css";
export default function Contact() {
  return (
    <>
      <main>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card pb-5">
                <div className="card-body">
                  <div className="container">
                    <section className="section">
                      <h2 className="font-weight-bold text-center h1 my-5">
                        Contact us
                      </h2>
                      <p className="text-center grey-text mb-5 mx-auto w-responsive">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugit, error amet numquam iure provident voluptate
                        esse quasi, veritatis totam voluptas nostrum quisquam
                        eum porro a pariatur accusamus veniam.
                      </p>
                      <div className="row pt-5">
                        <div className="col-md-8 col-xl-9">
                          <form>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="md-form">
                                  <input
                                    type="text"
                                    id="contact-name"
                                    className="form-control"
                                  />
                                  <label htmlFor="contact-name" className="">
                                    Your name
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="md-form">
                                  <input
                                    type="text"
                                    id="contact-email"
                                    className="form-control"
                                  />
                                  <label htmlFor="contact-email" className="">
                                    Your email
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="md-form">
                                  <input
                                    type="text"
                                    id="contact-Subject"
                                    className="form-control"
                                  />
                                  <label htmlFor="contact-Subject" className="">
                                    Subject
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="md-form">
                                  <textarea
                                    type="text"
                                    id="contact-message"
                                    className="md-textarea form-control"
                                    rows="3"
                                  ></textarea>
                                  <label htmlFor="contact-message">
                                    Your message
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className="text-center text-md-left my-4">
                            <a href="#!" className="btn peach-gradient">
                              Send
                            </a>
                          </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                          <ul className="contact-icons text-center list-unstyled">
                            <li>
                              <i className="fas fa-map-marker fa-2x orange-text"></i>
                              <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li>
                              <i className="fas fa-phone fa-2x orange-text"></i>
                              <p>+ 01 234 567 89</p>
                            </li>
                            <li>
                              <i className="fas fa-envelope fa-2x orange-text"></i>
                              <p>contact@loremimpsum.com</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
