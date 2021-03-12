import React from "react";
export default function Footer() {
  return (
    <footer className="page-footer pt-4 mt-4   mdb-color lighten-3 text-center text-md-left">
      <div className="container wow fadeIn" data-wow-delay="0.3s">
        <div className="row mt-3 mb-4">
          <div className="col-lg-12">
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="p-2 m-2 fa-lg fb-ic"
                >
                  <i className="fab fa-facebook-f white-text"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" className="p-2 m-2 fa-lg tw-ic">
                  <i className="fab fa-twitter white-text"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/signin/v2/identifier?service=oz&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  className="p-2 m-2 fa-lg gplus-ic"
                >
                  <i className="fab fa-google-plus-g white-text"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="p-2 m-2 fa-lg li-ic"
                >
                  <i className="fab fa-instagram white-text"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
