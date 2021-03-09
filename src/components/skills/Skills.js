import React from 'react'
import "./skills.css"
import work from "../../../src/assets/work3.jpg";

function Skills(props) {
    return (
        <div className="background_set" ref={props.skillsRef}>
            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle" data-sr-id="12" >Profesional Skills</h2>
                        <p class="skills__text" data-sr-id="13" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div class="skills__data" data-sr-id="15"  style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxl-html5 skills__icon"></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data" data-sr-id="16" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxl-css3 skills__icon"></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div class="skills__data" data-sr-id="17" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxl-javascript skills__icon"></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <div>
                    <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">UX/UI</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>  
                        <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">REACT</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>            
                    <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">JAVA</span>
                            </div>
                            <div class="skills__bar skills__java">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">75%</span>
                            </div>
                        </div>
                        <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">C/C++</span>
                            </div>
                            <div class="skills__bar skills__CPP">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">Data Structures and Algorithm</span>
                            </div>
                            <div class="skills__bar skills__DSA">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">55%</span>
                            </div>
                        </div>
                        <div class="skills__data" data-sr-id="18" style={{visibility: 'visible',opacity: '1',transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
                            <div class="skills__names">
                                <i class="bx bxs-paint skills__icon"></i>
                                <span class="skills__name">Problem Solving</span>
                            </div>
                            <div class="skills__bar skills__PS">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
