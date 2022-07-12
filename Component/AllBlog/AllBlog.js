import React from "react";
import animation from "../../images/animation.gif";
import HeaderNavbar from "../Home/HeaderNavbar/HeaderNavbar";

const AllBlog = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`,
      }}
    >
      <HeaderNavbar></HeaderNavbar>
      <br />
      <div className="container">
        <h2
          style={{ marginTop: "50px" }}
          className="text-center text-white pb-5"
        >
          All Blog
        </h2>
        <div class="card-deck pb-5">
          <div class="card">
            <img class="card-img-top" src={blog1} alt="Card image cap" />
            <div class="card-body" style={{ background: " rgb(27, 61, 93)" }}>
              <h5 style={{ color: "rgb(81, 233, 157)" }}>Javascript blog</h5>
              <p class="text-white">
                Some Basic tricks to solve problem-solving in JavaScript.
              </p>
              <a href="https://ashik1012.medium.com/some-basic-tricks-to-solve-problem-solving-in-javascript-b0c3aabdd1f1">
                {" "}
                <button
                  className="btn btn-danger"
                  style={{
                    width: "100%",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px",
                    color: "white",
                  }}
                >
                  Read
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
