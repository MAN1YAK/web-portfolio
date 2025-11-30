import React, { useEffect, useState } from 'react';
import styles from './Homepage.module.css';
import AboutMeCard from './component/AboutMeCard';
import ProjectScroll from './component/ProjectsScroll';

function HomePage() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100); // slight delay for effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <div className={`${styles.fadeWrapper} ${fadeIn ? styles.visible : ''}`}>
                <AboutMeCard />
            </div>

            <div className={`${styles.fadeWrapper} ${fadeIn ? styles.visible : ''}`}>
                <ProjectScroll />
            </div>

        </div>
    )
}

export default HomePage;
