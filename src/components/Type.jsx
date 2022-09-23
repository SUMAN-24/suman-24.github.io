import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(
            `<strong><span style="background: linear-gradient(to left, #7928CA, #FF0080); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">
              A Full Stack Developer
            </span>`
          )
          .pauseFor(100)
          .deleteChars(42)
          .typeString(
            `<strong><span style="background: linear-gradient(to left, #7928CA, #FF0080); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">
              A MERN Stack Developer
            </span>`
          )
          .pauseFor(100)
          .deleteChars(42)
          .start();
      }}
      options={{
        //autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  );
};

export default Type;
