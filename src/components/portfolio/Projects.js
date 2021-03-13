import React from "react";
import "./portfolio.css";
import farm from '../../assets/logo11.png'
import auth from '../../assets/auth.PNG'

import { useLocation, withRouter, Link, useHistory } from "react-router-dom";

function Projects(props) {
  let history = useHistory();

  return (
    <div>

      <section id="portfolio" ref={props.projectRef}>
        <h1 class="p-headind" data-aos="zoom-in-up"   data-aos-delay="0">PROJECTS AND PROGRAMS</h1>
        <div class="p-container">
          <div
            class="p-box"
            data-aos="zoom-in-left"
          >
            <div class="overlay-text">

              <h1>Farmket</h1>
              <p>E-commerce website for Farmers</p>
              <a class="btn"  target="_blank" href="https://farmket-react.web.app/" >View</a>

              
            </div>
            <img src={farm} />
          </div>
          <div class="p-box" data-aos="zoom-out">
            <div class="overlay-text">
              <h1>Netflix Clone</h1>
              <p>Replica of Netflix using TMDB api</p>
              <a class="btn"  target="_blank" href="https://netflix-clone-229af.web.app/" >View</a>

            </div>
            <img className="netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" />

          </div>
          <div class="p-box" data-aos="zoom-in-right">
            <div class="overlay-text">
              <h1>React Authentication</h1>
              <p>Sign in/Sign up using firebase functions</p>
              <a class="btn"  target="_blank" href="https://react-auth-65eed.web.app/" >View</a>

            </div>
            <img src={auth} />
          </div>
          {/* <div class="p-box" data-aos="zoom-in-left">
            <div class="overlay-text">
              <h1>Time</h1>
              <p>Client Project</p>
              <a class="btn"  target="_blank" href="https://farmket-react.web.app/" >View</a>

            </div>
            <img src={farm} />
          </div> */}
          {/* <div class="p-box" data-aos="zoom-out">
            <div class="overlay-text">
              <h1>Creative</h1>
              <p>Client Project</p>
              <a class="btn"  target="_blank" href="https://farmket-react.web.app/" >View</a>

            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div> */}
          {/* <div class="p-box" data-aos="zoom-in-right">
            <div class="overlay-text">
              <h1>Books</h1>
              <p>Client Project</p>
              <a class="btn"  target="_blank" href="https://farmket-react.web.app/" >View</a>

            </div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.NV9wwrCb_F5ohHHBZo9tNgHaEK&pid=Api&P=0&w=305&h=172" />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default withRouter(Projects);
