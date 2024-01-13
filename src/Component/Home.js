import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71LeWs1P1JL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12324341"
            title="AKASO EK7000 4K30FPS 20MP Action Camera Ultra HD Underwater Camera 170 Degree Wide Angle 98FT Waterproof Camera Support External Microphone"
            price={189.96}
            rating={5}
            image="	https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71E11vv5mNL._AC_SX679_PIbundle-31,TopRight,0,0_SH20_.jpg"
          />
          <Product
            id="12324342"
            title="Venustas Heated Jacket for Men with Battery Pack, Water Repellent Softshell Electric Heated Coat."
            price={149.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71kvWZ6l3wL._AC_SX569_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12324343"
            title="Bluetooth Speakers, 60W Portable Wireless Loud Outdoor Home Party Bluetooth Speaker with Subwoofer, FM Radio, LED Colorful Lights, Microphone, Remote and Big Powerful Stereo Deep Bass Sound Boombox"
            price={79.98}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uS4XQOk+L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="12324344"
            title="Smart Watch for Men Women [49mm], Answer/Make Call, 120+ Sports Modes Fitness Tracker, 24/7 Heart Rate/SpO2/Sleep Monitor, Step Calorie Counter, Water Resistant Smartwatch for iPhone & Android (Black)"
            price={59.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71RK+R40AgL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="12324345"
            title='hp Newest Essential 15 Laptop, 16GB RAM, 640GB(128GB SSD+512GB USB), 15.6" Anti-Glare Display, Intel Quad-Core Processor, Office 365 1-Year, Upto 11hrs Battery, Type-C, Fast Charging, Win11S, JVQ mp'
            price={349}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71ASAtN3OZL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12324346"
            title='SAMSUNG 49" S95UA Super Ultrawide Dual QHD Monitor, 4ms, QLED, HDR400, USB-C, USB Hub, 120Hz, Height Adjustable Stand, LS49A950UINXZA, 2022, Charcoal Black'
            price={1099.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WWFZa7shL._AC_SX569_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12324347"
            title="shineshine 262FT 800LED Outdoor Christmas Lights, Christmas Tree Lights with 8 Modes Remote & Timer, Christmas String Lights for Wedding Xmas Party Garden Decor (Multicolor)"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ymOlHgEAL._AC_SX569_.jpg"
          />

          <Product
            id="12324348"
            title="Nintendo Switch OLED Model w/White Joy-Con (Renewed)"
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61LRAVRqyCL._SX522_.jpg"
          />

          <Product
            id="12324349"
            title="DJI Mini 4 Pro (DJI RC-N2), Folding Mini-Drone with 4K HDR Video Camera for Adults, Under 0.549 lbs/249 g, 34 Mins Flight Time, 20 km Max Video Transmission Distance, Omnidirectional Vision Sensing"
            price={764.99}
            rating={5}
            image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61DL29b+NuL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
