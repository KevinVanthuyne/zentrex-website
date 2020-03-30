import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import styles from "./banner-img.module.scss";

export default props => (
  <ParallaxProvider>
    <ParallaxBanner
      className={(styles.banner, props.className)}
      layers={[
        {
          image: props.img,
          amount: props.parallax,
        },
      ]}
      style={props.style}
    >
      <div
        className={styles.overlay}
        style={{
          backgroundColor: props.overlayColor,
          opacity: props.overlayOpacity,
        }}
      ></div>
      {props.children}
    </ParallaxBanner>
  </ParallaxProvider>
);
