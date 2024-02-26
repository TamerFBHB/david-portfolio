import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./styles.css";

const Particule = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
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

    return (
        <Particles

            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{

                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                style: {
                    display: "flex",
                    position: "absolute",
                    width: "100%",
                    height: " 100%",
                    top:" 0%",
                    left:" 0%",
                },
                fpsLimit: 120,
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
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none", enable: true, outModes: { default: "bounce", },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: { density: { enable: true, area: 800, }, value: 100, },
                    opacity: { value: 0.5, },
                    shape: { type: "circle", },
                    size: { value: { min: 1, max: 5 }, },
                },
                detectRetina: true,
            }}
        />

    )
}

export default Particule;