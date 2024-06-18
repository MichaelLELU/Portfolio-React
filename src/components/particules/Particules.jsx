import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function Particules () {
  const [init, setInit] = useState(false);


  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({	
//le context va jouer avec ça !
/*       autoPlay: true, */
      background: {
        color: {
          value: "rgb(42,41,42)",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 20,
          },
          repulse: {
            distance: 150,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: "rgb(175, 103, 175)",
        },
        links: {
          color: "#f5f5dc",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 0,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3 , max: 5 },
        },
      attract:{
        distance:300,
        duration:0.4,
        easing:"ease-out-quad",
        factor:1,
        maxSpeed:50,
        speed:2,
        }
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
        <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
        </div>
    );
  }

  return <></>;
}
