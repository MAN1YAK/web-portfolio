import { useState } from 'react'
import styles from './AboutMeCard.module.css';
import picture from '../assets/picture.jpg';
import swiggle from '../assets/swiggleWriting.png';
import signature from '../assets/signatureCard.png';
import { aboutDescription } from '../assets/projectData';
import { MdEmail, MdPhone } from "react-icons/md";

function AboutMeCard() {

    const [copied, setCopied] = useState(false);

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };


    return (
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={`${styles.horizontalLine} ${styles.line1}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.line2}`}></div>
                    <div className={`${styles.horizontalLine} ${styles.line3}`}></div>
                    <div className={styles.cardTitle}>
                        <h1>Angelo Munoz</h1>
                    </div>
                </div>

                <div className={styles.cardtitleBottom}>
                    <div>
                        <h1>Student License</h1>
                        <h2>Mobile and Web Application - MWA</h2>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.left}>
                        <div className={styles.pictureBorder}>
                            <img src={picture} alt="Selfie Picture" className={styles.picture} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={swiggle} className={styles.swiggle} />
                        <p>{aboutDescription}</p>
                        <div className={styles.contact}>
                            <MdEmail
                                className={styles.emailIcon}
                                onClick={() => handleCopy("angelomunoz440@gmail.com")}
                            />

                            <div className={styles.number}>
                                <MdPhone
                                    className={styles.phoneIcon}
                                    onClick={() => handleCopy("+63 950 182 6105")}
                                />
                                <p>+63 950 182 6105</p>
                            </div>

                            {copied && (
                                <div className={styles.toast}>
                                    Copied to clipboard!
                                </div>
                            )}
                        </div>
                        <img src={signature} className={styles.signature} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMeCard