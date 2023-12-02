import React from "react";
import styles from "./Login.module.css";
import { images } from "../../constants";

export default function Login() {
  return (
    <>
      <section
        className={`container-fluid ${styles.login_container} mx-0 px-0`}
      >
        <div className={`${styles.login_section_div} `}>
          <div className={`${styles.login_bg_1}`}>
            <img src={images.blue_bg} alt="img" />
          </div>

          <div className={`${styles.login_bg_2}`}>
            <img src={images.rectangle} alt="img" />
          </div>

          <div className={`${styles.login_bg_3}`}>
            <img src={images.eclipse} alt="img" />
          </div>

          <div className={`${styles.login_card} card`}>
            <div className={`${styles.card_body} card-body`}>
              <div className={`row`}>
                <div className={`col-lg-6 col-12 py-5 px-5`}>
                  <div className="text-center">
                    <div className={`${styles.logo_img_div}`}>
                      <img src={images.logo} alt="img" />
                    </div>
                    <h5 className={`${styles.login_h5} mt-4`}>
                      Login to your account
                    </h5>
                    <div>
                      <form>
                        <div className={`${styles.input_div} mt-sm-5 mt-4`}>
                          <input
                            type="email"
                            className="form-control shadow-none"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                          />
                        </div>
                        <div className={`${styles.input_div} mt-sm-5 mt-4`}>
                          <input
                            type="email"
                            className="form-control  shadow-none"
                            placeholder="********"
                            name="email"
                            id="email"
                          />
                        </div>

                        <div
                          className={`${styles.checkbox_div} text-start mt-sm-5 mt-4`}
                        >
                          <input
                            type="checkbox"
                            className="form-check-input shadow-none me-3"
                          />
                          <label>Remember username</label>
                        </div>

                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <button className={`btn ${styles.submit_btn} mt-4`}>
                            SUBMIT
                          </button>
                          <div className="mt-3">
                            <a
                              className={`${styles.forgot_link} text-danger`}
                              href="/"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 d-lg-block d-none`}>
                  <div className={`${styles.card_img_section}`}>
                    <div className={`${styles.card_img_div}`}>
                      <img src={images.mask_group} alt="img" />
                    </div>

                    <div className={`${styles.card_img_div}`}>
                      <img src={images.bg} alt="img" />
                    </div>

                    <div className={`${styles.card_content_div}`}>
                      <h6>Get future fit with the mostin-demand skills</h6>
                      <p>Experience immersive learning with PRISM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 text-center">
            <p className={`${styles.copyright}`}>
              Copyright &copy; {new Date().getFullYear()} Mazenet Solution Pvt
              Ltd. All Right Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
