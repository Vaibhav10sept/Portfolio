import React from 'react'
import '../internships/internship.css'

function Internship({location:{state:{sample}}}) {
    return (
    <div className="internshipbody">
           

<div class="container-fluid splash" >
  <div class="containerp">
    
    <h1>Netflix Clone</h1>
    <span class="lead">Sub heading</span>
    <span class="continue"><a href="#about"><i class="fa fa-angle-down"></i></a></span>
  </div>
</div>

<div class="container-fluid intro" >
  <div class="containerp">
    <h2>About Project</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ratione impedit soluta amet quas saepe temporibus <a href="#">eum reprehenderit</a> voluptas! A nihil adipisci itaque quos quo dolorum consequuntur iusto facere quaerat, excepturi quod, necessitatibus aliquid quae est qui, aut in assumenda animi tempora debitis. Beatae, veritatis, delectus. Repellat dolore, molestias nam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ratione impedit soluta amet quas saepe temporibus <a href="#">eum reprehenderit</a> voluptas! A nihil adipisci itaque quos quo dolorum consequuntur iusto facere quaerat, excepturi quod, necessitatibus aliquid quae est qui, aut in assumenda animi tempora debitis. Beatae, veritatis, delectus. Repellat dolore, molestias nam.</p>
  </div>
</div>

<div class="container-fluid features" >
  <div class="containerp cf">
    <h2>Libraries &amp; API calls </h2>
    <div class="col-3">
      <img src="https://s22.postimg.org/oi5es3fkx/icon_cloud.png" alt=""/>
      <h3>Material-UI</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim! Neque.</p>
    </div>
    <div class="col-3">
      <img src="https://s22.postimg.org/jxj8d5vvl/icon_coding.png" alt=""/>
      <h3>Restful API</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim! Neque.</p>
    </div>
    <div class="col-3">
      <img src="https://s22.postimg.org/citwksa01/icon_graph.png" alt=""/>
      <h3>Other features</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim! Neque.</p>
    </div>
  </div>
</div>


        </div>

    )
}

export default Internship
