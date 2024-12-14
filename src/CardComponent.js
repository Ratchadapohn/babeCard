import React, { useState } from 'react';

const CardComponent = () => {
    const [step, setStep] = useState(1);

    const messages = [
        "💌 Get Well Soon, My Love!",
        "You're my sunshine on a cloudy day. 🌞",
        "Every moment without you feels incomplete. ❤️",
        "Sending you all the cuddles and love I can. 🐻",
        "You’re the strongest person I know. 💪",
        "I’ll be here for you, no matter what. 🤗",
        "Your smile is all I need to brighten my day. 😊",
        "You’ve got this! I believe in you. ✨",
        "Can’t wait to see you healthy and happy again. 💕",
        "Here’s us, together forever. 👫"
    ];

    const images = [
        "/IMG_5817.JPG", // รูปตุ๊กตาหมี
        "/us_together.jpg", // รูปเราสองคน
    ];

    const nextStep = () => {
        setStep((prevStep) => (prevStep < 10 ? prevStep + 1 : prevStep));
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {step < 10 && (
                    <>
                        <h1>{messages[step - 1]}</h1>
                        <p>
                            {step === 1
                                ? "Just click below to follow a little journey of love and care!"
                                : "Click for more love and surprises! 💖"}
                        </p>
                        <button style={styles.button} onClick={nextStep}>
                            {step === 9 ? "Final Page 💝" : "Next 💌"}
                        </button>
                    </>
                )}

                {step === 10 && (
                    <>
                        <h1>{messages[9]}</h1>
                        <p>
                            "You mean the world to me. Wishing you a speedy recovery so we can
                            share more beautiful moments together. 💕"
                        </p>
                        <img
                            src={images[0]}
                            alt="Teddy Bear"
                            style={{ ...styles.image, marginBottom: "10px" }}
                        />
                        <img
                            src={images[1]}
                            alt="Us Together"
                            style={styles.image}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to bottom, #f0f8ff, #add8e6)',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    card: {
        textAlign: 'center',
        background: '#ffffff',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        maxWidth: '90%',
        width: '400px',
        animation: 'fadeIn 1s',
    },
    button: {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '20px',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    image: {
        width: '200px', // Increased size
        height: 'auto',
        borderRadius: '15px', // New border radius for rounded corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Added shadow for depth
        marginTop: '20px',
    },
    '@media (max-width: 768px)': {
        container: {
            padding: '10px',
        },
        card: {
            padding: '15px',
            maxWidth: '95%',
        },
        button: {
            padding: '8px 16px',
            fontSize: '14px',
        },
        image: {
            width: '150px', // Adjusted image size for mobile
        },
    },
};



export default CardComponent;
