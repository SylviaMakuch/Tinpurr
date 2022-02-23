import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import tobi from "./../media/Tobi.jpg";
import girly from "./../media/girly.jpeg";
import loveshades from "./../media/loveshades.jpg";
import "./TestStyles.css";

export default function Testimonials() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={tobi} />
          <div className="myCarousel">
            <h3>Tobi Keystone</h3>
            <h4>📍 - Vancouver, Canada</h4>
            <p>
            "I no longer have to howl at the moon to call for my lady !!"
            </p>
          </div>
        </div>

        <div>
          <img src={girly} />
          <div className="myCarousel">
            <h3>Gina Pizzololi</h3>
            <h4>📍 - Rome, Italy</h4>
            <p>
            "With Enrico going on dates, we have more time to ourselves!"
            </p>
          </div>
        </div>

        <div>
          <img src={loveshades} />
          <div className="myCarousel">
            <h3>Princess Sorel</h3>
            <h4>📍 - Georgia, USA</h4>
            <p>
            "I no longer have to worry about staying clean, I have kitties licking me every night.  I have Love Shades on."
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
