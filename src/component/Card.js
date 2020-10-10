import React, { Component } from "react";
import shoes1 from "../images/shoes1.png";
import shoes4 from "../images/shoes4.png";
import shoes8 from "../images/shoes8.png";
import Tilt from "react-vanilla-tilt";

class Card extends React.Component {
  render() {
    // VanillaTilt.init(document.querySelectorAll(".box"), {
    //   max: 25,
    //   speed: 400,
    // });
    // <VanillaTilt />
    return (
      <div class="container">
        <Tilt>
          <dv class="box">
            <img src={shoes1} class="product" />
          </dv>
        </Tilt>

        <div
          class="box"
          // class="your-element"
          data-tilt
          data-tilt-max="50"
          data-tilt-speed="400"
          data-tilt-perspective="500"
        >
          <h2 class="name">Product Name</h2>
          <a href="#" class="buy">
            Buy Now
          </a>
          <div class="circle"></div>
          <img src={shoes1} class="product" />
        </div>

        <div
          class="box"
          data-tilt
          data-tilt-max="50"
          data-tilt-speed="400"
          data-tilt-perspective="500"
        >
          <h2 class="name">Product Name</h2>
          <a href="#" class="buy">
            Buy Now
          </a>
          <div class="circle"></div>
          <img src={shoes4} class="product" />
        </div>

        <div
          class="box"
          data-tilt
          data-tilt-max="50"
          data-tilt-speed="400"
          data-tilt-perspective="500"
        >
          <h2 class="name">Product Name</h2>
          <a href="#" class="buy">
            Buy Now
          </a>
          <div class="circle"></div>
          <img src={shoes8} class="product" />
        </div>
        {/* </Tilt> */}
      </div>
    );
  }
}

export default Card;
