import React from "react";
import "./portfolio.css";
import work from "../../../src/assets/work3.jpg";
import { useLocation, withRouter, Link, useHistory } from "react-router-dom";

function Portfolio() {
  let history = useHistory();

  return (
    <div>

      <section id="portfolio">
        <h1 class="p-headind">Portfolio</h1>
        <div class="p-container">
          <div
            class="p-box"
            onClick={() => {
              history.push("/internships/" + "title", {
                sample: "fsadfasff",
              });
            }}
          >
            <div class="overlay-text">

              <h1>Writting</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Ideas</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Music</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Time</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Creative</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Books</h1>
              <p>Client Project</p>
            </div>
            <img src={work} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Portfolio);
