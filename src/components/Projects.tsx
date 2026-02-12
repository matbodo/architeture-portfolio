// import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "DOSEL",
        location: "Heredia, Costa Rica",
        type: "Residential",
        image: "/images/project1.jpg",
    },
    {
        title: "LINEA DE VIDA",
        location: "Medellín, Colombia",
        type: "Mixed-use",
        image: "/images/project2.jpg",
    },
    {
        title: "INTRACA",
        location: "Heredia, Costa Rica",
        type: "Workplace",
        image: "/images/project3.jpg",
    },
    {
        title: "CONCHAL",
        location: "Guanacaste, Costa Rica",
        type: "Hospitality",
        image: "/images/project4.jpg",
    },
];

export default function Projects() {
    // useEffect(() => {
    //     gsap.set(".project-item", {
    //         y: 80,
    //         opacity: 0,
    //     });

    //     gsap.to(".project-item", {
    //         y: 0,
    //         opacity: 1,
    //         stagger: 0.2,
    //         duration: 1.2,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: "#projects",
    //             start: "top 80%",
    //             onEnter: () => console.log("Projects animation triggered"),
    //         }
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, [])

    return (
        <section id="projects" className="projects">
            <div className="projects-grid">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="project-item"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="project-overlay" />

                        <div className="project-info">
                            <h1>{project.title}</h1>
                            <p>
                                {project.location} | {project.type}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}