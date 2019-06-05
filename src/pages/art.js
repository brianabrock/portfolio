import React, { Component } from 'react';
import Layout from "../components/layout"
import './css/art.css';

import l1 from '../images/art/rose.jpg'
import c1 from '../images/art/the_dock.jpg'
import r1 from '../images/art/outoftheflame.jpg'
import l2 from '../images/art/lighthouse_staircase.jpg'
import c2 from '../images/art/phoenix_rising.jpg'
import r2 from '../images/art/aftermath1.jpg'
import l3 from '../images/art/muscle_movement.jpg'
import c3 from '../images/art/water_meets_the_sky.jpg'
import r3 from '../images/art/rainbow_jesus.jpg'
import l4 from '../images/art/spiral_up2.jpg'
import c4 from '../images/art/self_portrait.png'
import r4 from '../images/art/serenity_lake.jpg'

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
                        {/* <p>Say a little something here about art...</p> */}
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
