import React from "react";
import classes from "./hero.module.css";
import  Image  from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="Profile image" width={300} height={300} />
      </div>
      <h1>Hi, I am Wil</h1>
      <p>Some dummy text</p>
    </section>
  );
}

export default Hero;
