import React, { useState, useEffect } from "react";
import bubbleTransition from "../assets/videos/bubbleTransition2.mp4";

function PageTransition({ page: TargetPage, switchDelay = 1500, onFadeOut }) {
    const [showVideo, setShowVideo] = useState(true);
    const [showPage, setShowPage] = useState(false);


        useEffect(() => {
        const timer = setTimeout(() => {
            onFadeOut();
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPage(true); // Show the new page
        }, switchDelay);

        return () => clearTimeout(timer);
    }, [switchDelay]);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
        <>
            {showVideo && (
                <video
                    src={bubbleTransition}
                    autoPlay
                    onEnded={handleVideoEnd}
                    style={{
                        width: "100vw",
                        height: "100vh",
                        objectFit: "cover",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                        mixBlendMode: "screen",
                        pointerEvents: "none",
                    }}
                />
            )}

            {showPage && <TargetPage />}
        </>
    );
}

export default PageTransition;

