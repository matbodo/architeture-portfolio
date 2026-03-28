// import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        // title: "DOSEL",
        // location: "Heredia, Costa Rica",
        // type: "Residential",
        image: "/images/casa-1.jpg",
    },
    {
        // title: "LINEA DE VIDA",
        // location: "Medellin, Colombia",
        // type: "Mixed-use",
        image: "/images/casa-2.jpg",
    },
    {
        // title: "INTRACA",
        // location: "Heredia, Costa Rica",
        // type: "Workplace",
        image: "/images/casa-3.jpg",
    },
    {
        // title: "CONCHAL",
        // location: "Guanacaste, Costa Rica",
        // type: "Hospitality",
        image: "/images/casa-4.jpg",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-grid">
                {projects.map((project) => (
                    <article
                        // key={project.title}
                        className="project-item"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="project-overlay" />

                        {/* <div className="project-info">
                            <h1>{project.title}</h1> */}
                        {/* <p>
                                {project.location} | {project.type}
                            </p> */}
                        {/* </div> */}
                    </article>
                ))}
            </div>
        </section>
    )
}
