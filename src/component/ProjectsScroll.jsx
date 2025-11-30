import React, { useState, useEffect } from 'react';
import styles from './ProjectsScroll.module.css';
import { projects } from '../assets/projectData.js';

function ProjectRow({ project, index }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (project.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % project.images.length);
            }, 12000); 
            return () => clearInterval(interval);
        }
    }, [project.images]);

    return (
        <div className={`${styles.projectRow} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectImageLink}
            >
                {project.images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className={`${styles.projectImage} ${i === currentImage ? styles.visible : ''}`}
                    />
                ))}
            </a>
            <div className={styles.textBox}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

function ProjectsScroll() {
    return (
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h1>FEATURED PROJECTS</h1>
            </div>
            <div className={styles.projectList}>
                {projects.map((proj, index) => (
                    <ProjectRow key={proj.id} project={proj} index={index} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsScroll;