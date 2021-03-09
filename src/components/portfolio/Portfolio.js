import React from "react";
import "./portfolio.css";
import { useLocation, withRouter, Link, useHistory } from "react-router-dom";

function Portfolio() {
  let history = useHistory();

  return (
    <div>

      <section id="portfolio">
        <h1 class="p-headind">PROJECTS AND PROGRAMS</h1>
        <div class="p-container">
          <div
            class="p-box"
        
          >
            <div class="overlay-text">

              <h1>Writting</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Ideas</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Music</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Time</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Creative</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
          <div class="p-box">
            <div class="overlay-text">
              <h1>Books</h1>
              <p>Client Project</p>
            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default withRouter(Portfolio);
