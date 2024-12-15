import React, { useState } from "react";

const EncouragementCard = () => {
    const [step, setStep] = useState(1);

    const messages = [
        "Rest well, my love. I’m here for you every step of the way. 🌈",
        "Healing happens with love and patience. You’ve got this! 💕",
        "Every moment you get stronger, and I’m so proud of you. 🌟",
        "Close your eyes, breathe, and know you’re deeply loved. 🌸",
        "Your smile will shine again soon, and I’ll be right here to see it. 😊",
        "One step at a time, my love. You’re doing amazing! 🐾",
        "Together, we’ll overcome anything. You’re my strength. 💖",
        "Sending you endless hugs and kisses for a speedy recovery. 🫂💌",
        "The world is brighter with you in it. Rest up and heal, my sunshine. ☀️",
        "Forever and always, I’m here to love and support you. ❤️"
    ];

    const images = [
        "IMG_5834.jpg"
    ];

    const nextStep = () => {
        setStep((prevStep) => (prevStep < 10 ? prevStep + 1 : prevStep));
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {step < 10 && (
                    <>
                        <h1 style={styles.heading}>{messages[step - 1]}</h1>
                        <button style={styles.button} onClick={nextStep}>
                            {step === 9 ? "Final Surprise 🎉" : " ❤️"}
                        </button>
                    </>
                )}

                {step === 10 && (
                    <>
                        <h1 style={styles.heading}>{messages[9]}</h1>
                        <img
                            src={images[0]}
                            alt="Cozy Bear"
                            style={{ ...styles.image, marginBottom: "10px" }}
                        />
                        {/* <img
                            src={images[1]}
                            alt="Healing Flowers"
                            style={styles.image}
                        /> */}
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
            "linear-gradient(140deg, #f8f9fa, #ffe3e3)",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
    },
    card: {
        textAlign: "center",
        background: "#ffffff",
        padding: "25px 20px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        maxWidth: "380px",
        width: "100%",
        animation: "fadeIn 1.2s",
        border: "1px solid #ffccd5",
    },
    heading: {
        color: "#ff6f91",
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "10px",
    },
    button: {
        backgroundColor: "#ff6f91",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        transition: "background-color 0.3s ease",
    },
    image: {
        width: "200px",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        marginTop: "15px",
    },
    "@media (max-width: 480px)": {
        card: {
            padding: "20px 15px",
        },
        heading: {
            fontSize: "18px",
        },
        button: {
            fontSize: "14px",
            padding: "8px 16px",
        },
        image: {
            width: "160px",
        },
    },
};

export default EncouragementCard;
