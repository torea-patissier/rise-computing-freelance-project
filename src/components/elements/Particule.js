import React, {useCallback} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";

const Particule = () => {


  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);


  return (
     <>
       <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#F4F4F4",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#FFFFFFF",
                opacity: 0.2,
              },
              links: {
                color: "#A7001E",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {min: 1, max: 5},
              },
            },
            detectRetina: true,
          }}
       />
     </>
  )
}
export default Particule
