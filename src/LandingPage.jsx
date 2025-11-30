import { useEffect, useState } from "react";
import PageTransition from "./component/PageTransition.jsx";
import styles from "./LandingPage.module.css";
import HomePage from "./HomePage.jsx";

function LandingPage() {
    const [fadeIn, setFadeIn] = useState(false);
    const [startTransition, setStartTransition] = useState(false);
    const [fadeOutLanding, setFadeOutLanding] = useState(false);
    const [showLanding, setShowLanding] = useState(true); // <-- New state

    const handleContinue = async () => {
        if (!startTransition) {
            // optional delay for UX
            await new Promise((resolve) => setTimeout(resolve, 100));
            setStartTransition(true);
        }
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter" || e.key === " ") {
                handleContinue();
            }
        };

        const handleClick = () => {
            handleContinue();
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClick);
        window.addEventListener("touchstart", handleClick); // for mobile taps

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchstart", handleClick);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 100); // slight delay for effect
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (fadeOutLanding) {
            const timer = setTimeout(() => setShowLanding(false), 500);
            return () => clearTimeout(timer);
        }
    }, [fadeOutLanding]);

    return (
        <>
            {startTransition && (
                <PageTransition
                    page={HomePage}
                    onFadeOut={() => setFadeOutLanding(true)}
                    switchDelay={1000}
                />
            )}

            {showLanding && (

                <div
                    className={`${styles.landingWrapper} ${fadeOutLanding ? styles.fadeOut : ""
                        }`}

                    onTouchStart={handleContinue}

                >
                    <div className={`${styles.pageWrapper} ${fadeIn ? styles.visible : ''}`}>

                        <div id="title" className={styles.titleContainer}>
                            <div className={styles.blob} />
                            <div className={styles.blobOverlay} />

                            <h1>
                                <span className={styles.titleUp}>Angelo Munoz</span>
                                <span className={styles.titleDown}>Portfolio</span>
                            </h1>
                        </div>
                        <div id="button">
                            <button className={styles.button}>
                                Click Anywhere to Continue
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default LandingPage;
