import React from 'react'
import './preloader.css'
import { RotateScale } from 'styled-loaders-react'

function Preloader() {
    return (
        <div class="preloader">
            <div class="clip-text clip-text_two">VAIBHAV'S</div><br/>
            <div class="clip-text clip-text_two">PORTFOLIO</div>
            <RotateScale size="100px"/>
           

        </div>
    )
}

export default Preloader
