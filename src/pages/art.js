import React, { Component } from 'react'; 
import Layout from "../components/layout"
import './css/art.css'; 

import l1 from '../images/rose.jpg'
import c1 from '../images/the_dock.jpg'
import r1 from '../images/outoftheflame.jpg'
import l2 from '../images/lighthouse_staircase.jpg'
import c2 from '../images/phoenix_rising.jpg'
import r2 from '../images/aftermath1.jpg'
import l3 from '../images/muscle_movement.jpg'
import c3 from '../images/water_meets_the_sky.jpg'
import r3 from '../images/rainbow_jesus.jpg'
import l4 from '../images/spiral_up2.jpg'
import c4 from '../images/self_portrait.png'
import r4 from '../images/serenity_lake.jpg'

class Art extends Component {

    componentDidMount() {
        this.artScroll()
    }

    artScroll() {
        const wh = window.innerHeight;
        const imgElems = document.querySelectorAll('img'); 

        window.addEventListener('scroll', function(e) {
            let scrollPosBottom = window.scrollY + wh; 
        
            imgElems.forEach( (img, i) => {
                if(img.offsetTop < scrollPosBottom) {
                    // console.log('ONscreen'); 
                    img.classList.add('active'); 
                } else {
                    img.classList.remove('active'); 
                    // console.log('offscreen'); 
                }
            }) 
        })    
    }

    render() {
        return (
            <Layout>
                <div className="art-page">
                    
                    <section className="hero">
                        <h1>Art...makes me happy</h1>
                    </section>

                    <section className="description">
                        <p>In my spare time I use acrylics and oil for paintings and I'm also an amateur photographer. </p>
                    </section>

                    <section className="grid">

                        <img className="grid-item" src={l1} alt=""/>
                        <img className="grid-item" src={c1} alt=""/>
                        <img className="grid-item" src={r1} alt=""/>
                        <img className="grid-item" src={l2} alt=""/>
                        <img className="grid-item" src={c2} alt=""/>
                        <img className="grid-item" src={r2} alt=""/>
                        <img className="grid-item" src={l3} alt=""/>
                        <img className="grid-item" src={c3} alt=""/>
                        <img className="grid-item" src={r3} alt=""/>
                        <img className="grid-item" src={l4} alt=""/>
                        <img className="grid-item" src={c4} alt=""/>
                        <img className="grid-item" src={r4} alt=""/>
                        
                    </section>      
                </div>
            </Layout>
        )
    }
}

export default Art; 