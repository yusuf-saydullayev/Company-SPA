import React from "react";

export default function Main() {
  return (
    <>
      <section className="view intro-2">
        <div className="mask rgba-gradient"></div>
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <div className="row flex-center pt-5 mt-3">
            <div className="col-md-6 text-center text-md-left margins">
              <div className="white-text">
                <h1
                  className="h1-responsive font-weight-bold wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  Make purchases with our app{" "}
                </h1>
                <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                <h6 className="wow fadeInLeft" data-wow-delay="0.3s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.
                </h6>
                <br />
                <a
                  href="#!"
                  className="btn btn-outline-white wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  Learn more
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-white wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  Download
                  <i
                    className="fab fa-android left right"
                    aria-hidden="true"
                  ></i>
                  <i className="fab fa-apple left" aria-hidden="true"></i>
                  <i className="fab fa-windows" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 wow fadeInRight d-flex justify-content-center"
              data-wow-delay="0.3s"
            >
              <img
                src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-admin.png"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="container">
          <section className="text-center wow fadeIn" data-wow-delay="0.3s">
            <h1 className="font-weight-bold text-center h1 my-5">
              Why is it so great?
            </h1>
            <p className="text-center grey-text mb-5 mx-auto w-responsive lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum.
            </p>
            <div className="row text-left">
              <div className="col-md-4 mb-4">
                <div className="col-1 col-md-2 float-left">
                  <i className="fas fa-bullhorn fa-2x blue-text"></i>
                </div>
                <div className="col-10 col-md-9 col-lg-10 float-right">
                  <h4 className="font-weight-bold mb-4">Marketing</h4>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda.
                  </p>
                  <a href="#!" className="btn blue-gradient btn-sm ml-0">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="col-1 col-md-2 float-left">
                  <i className="fas fa-cogs fa-2x orange-text"></i>
                </div>
                <div className="col-10 col-md-9 col-lg-10 float-right">
                  <h4 className="font-weight-bold mb-4">Customization</h4>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda.
                  </p>
                  <a href="#!" className="btn btn-deep-orange btn-sm ml-0">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="col-1 col-md-2 float-left">
                  <i className="fas fa-tachometer-alt fa-2x purple-text"></i>
                </div>
                <div className="col-10 col-md-9 col-lg-10 float-right">
                  <h4 className="font-weight-bold mb-4">Support</h4>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda.
                  </p>
                  <a href="#!" className="btn btn-secondary btn-sm ml-0">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section className="my-5 wow fadeIn" data-wow-delay="0.3s">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Our pricing plans
            </h2>
            <p className="text-center w-responsive mx-auto mb-5 grey-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                <div className="card pricing-card white-text">
                  <div className="aqua-gradient rounded-top">
                    <h4 className="option">BASIC</h4>
                  </div>
                  <div className="card-body striped green-striped card-background px-5">
                    <h2 className="my-4 pb-3 h1">20$</h2>
                    <ul>
                      <li>
                        <p>
                          <strong>1</strong> project
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>100</strong> components
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>150</strong> features
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>200</strong> members
                        </p>
                      </li>
                    </ul>
                    <button className="mb-3 mt-3 btn aqua-gradient btn-rounded">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                <div className="card pricing-card white-text">
                  <div className="peach-gradient rounded-top">
                    <h4 className="option">PRO</h4>
                  </div>
                  <div className="card-body striped orange-striped card-background px-5">
                    <h2 className="my-4 pb-3 h1">80$</h2>
                    <ul>
                      <li>
                        <p>
                          <strong>1</strong> project
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>100</strong> components
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>150</strong> features
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>200</strong> members
                        </p>
                      </li>
                    </ul>
                    <button className="mb-3 mt-3 btn peach-gradient btn-rounded">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card pricing-card white-text">
                  <div className="purple-gradient rounded-top">
                    <h4 className="option">ENTERPRISE</h4>
                  </div>
                  <div className="card-body striped purple-striped card-background px-5">
                    <h2 className="my-4 pb-3 h1">100$</h2>
                    <ul>
                      <li>
                        <p>
                          <strong>1</strong> project
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>100</strong> components
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>150</strong> features
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>200</strong> members
                        </p>
                      </li>
                    </ul>
                    <button className="mb-3 mt-3 btn purple-gradient btn-rounded">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
