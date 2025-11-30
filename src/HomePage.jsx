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
            <div className={`${styles.pageWrapper} ${fadeIn ? styles.visible : ''}`}>
                <div className={styles.itemRow}>
                    <AboutMeCard />
                    <ProjectScroll />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
