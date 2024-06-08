// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hero-title"
            >
                Welcome to MyDARK Side
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hero-subtitle"
            >
              im MrX
            </motion.p>
        </section>
    );
};

export default Hero;
