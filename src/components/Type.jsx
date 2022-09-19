import React from "react";

import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Full Stack Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 80,
        }}
      />
    </>
  );
};

export default Type;
