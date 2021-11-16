import React from 'react';
import backgroundVideo from "./videos/world.mp4"

export const BackgroundVideo = () =>{
    return(
        <div id="main">
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
            <div id="infoBox">
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
                <div className="box">5</div>
                <div className="box">6</div>
                <div className="box">7</div>
                <div className="box">8</div>
                <div className="box">9</div>
                <div className="box">10</div>
                <div className="box">11</div>
                <div className="box">12</div>
                <div className="box">13</div>
                <div className="box">14</div>
                <div className="box">15</div>
                <div className="box">16</div>
            </div>
        </div>
    )
       
}