import React from "react"
import logo1 from "../img/person1.jpg"
import logo2 from "../img/person2.jpg"
import logo3 from "../img/person3.jpg"
import "../ViewGuest/ViewGuest.css"
const ViewGuest = () => {
  return (
    <div className="container-fluid view-guest-section">
      <div className="guest-info col-12 row">
        <div className="view-guest-left col-xl-4 col-lg-4 col-sm-12 col-12 d-flex align-items-center flex-column">
          <img
            src={logo1}
            alt={logo1}
          />
          <h3 className="review-guest-name">Peter John</h3>
          <span className="review-guest-job">Tester</span>
        </div>
        <div className="view-guest-right col-xl-8 col-lg-8 col-sm-12 col-12">
          <span className="guest-info-date">October 15, 2023</span>
          <h3 className="guest-info-focus">
            How to Learn Springboot Easily!!!
          </h3>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            similique in quibusdam
          </p>
          <div className="view-guest-contact">
            <span style={{ marginRight: "10px" }}>
              <i
                className="fa-brands fa-gratipay"
                style={{ color: "orange" }}
              ></i>{" "}
              38.5k{" "}
            </span>
            <span>
              <i
                className="fa-brands fa-telegram"
                style={{ color: "lightgreen" }}
              ></i>{" "}
              20
            </span>
          </div>
        </div>
      </div>
      <div className="guest-info col-12 row">
        <div className="view-guest-left col-xl-4 col-lg-4 col-sm-12 col-12 d-flex align-items-center flex-column">
          <img
            src={logo2}
            alt={logo2}
          />
          <h3 className="review-guest-name">Cristiano Ronaldo</h3>
          <span className="review-guest-job">Player</span>
        </div>
        <div className="view-guest-right col-xl-8 col-lg-8 col-sm-12 col-12">
          <span className="guest-info-date">October 12, 2024</span>
          <h3 className="guest-info-focus">Master javascript in 1 day</h3>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            similique in quibusdam
          </p>
          <div className="view-guest-contact">
            <span style={{ marginRight: "10px" }}>
              <i
                className="fa-brands fa-gratipay"
                style={{ color: "orange" }}
              ></i>{" "}
              30.5k{" "}
            </span>
            <span>
              <i
                className="fa-brands fa-telegram"
                style={{ color: "lightgreen" }}
              ></i>{" "}
              19
            </span>
          </div>
        </div>
      </div>
      <div className="guest-info col-12 row">
        <div className="view-guest-left col-xl-4 col-lg-4 col-sm-12 col-12 d-flex align-items-center flex-column">
          <img
            src={logo3}
            alt={logo3}
          />
          <h3 className="review-guest-name">Michale</h3>
          <span className="review-guest-job">Jackson</span>
        </div>
        <div className="view-guest-right col-xl-8 col-lg-8 col-sm-12 col-12">
          <span className="guest-info-date">January 15, 2021</span>
          <h3 className="guest-info-focus">
            How to create an AI chatbot using Python
          </h3>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            similique in quibusdam
          </p>
          <div className="view-guest-contact">
            <span style={{ marginRight: "10px" }}>
              <i
                className="fa-brands fa-gratipay"
                style={{ color: "orange" }}
              ></i>{" "}
              20k{" "}
            </span>
            <span>
              <i
                className="fa-brands fa-telegram"
                style={{ color: "lightgreen" }}
              ></i>{" "}
              24
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewGuest
