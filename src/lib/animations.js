// Aim: Centralized GSAP animation utilities and configurations

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Animation presets for common effects
 */
export const animations = {
    // Fade in from bottom
    fadeInUp: {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
    },

    // Fade in from top
    fadeInDown: {
        opacity: 0,
        y: -60,
        duration: 0.8,
        ease: "power3.out",
    },

    // Fade in from left
    fadeInLeft: {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
    },

    // Fade in from right
    fadeInRight: {
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
    },

    // Scale in
    scaleIn: {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.4)",
    },

    // Slide up reveal
    slideUp: {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
    },
};

/**
 * Create scroll-triggered animation
 * @param {string|HTMLElement} target - Element(s) to animate
 * @param {object} animationProps - GSAP animation properties
 * @param {object} scrollTriggerConfig - ScrollTrigger configuration
 */
export const scrollAnimation = (target, animationProps, scrollTriggerConfig = {}) => {
    return gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            ...scrollTriggerConfig,
        },
    });
};

/**
 * Stagger animation for multiple elements
 * @param {string|HTMLElement} targets - Elements to animate
 * @param {object} animationProps - GSAP animation properties
 * @param {number} staggerDelay - Delay between each element (default: 0.1s)
 */
export const staggerAnimation = (targets, animationProps, staggerDelay = 0.1) => {
    return gsap.from(targets, {
        ...animationProps,
        stagger: staggerDelay,
    });
};

/**
 * Create a timeline for complex animation sequences
 * @param {object} config - Timeline configuration
 */
export const createTimeline = (config = {}) => {
    return gsap.timeline({
        defaults: {
            ease: "power3.out",
            duration: 0.8,
        },
        ...config,
    });
};

/**
 * Parallax effect on scroll
 * @param {string|HTMLElement} target - Element to animate
 * @param {number} speed - Parallax speed (negative for reverse)
 */
export const parallaxEffect = (target, speed = 0.5) => {
    return gsap.to(target, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
};

/**
 * Typing effect for text
 * @param {HTMLElement} element - Text element
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in seconds per character
 */
export const typingEffect = (element, text, speed = 0.05) => {
    const chars = text.split("");
    element.textContent = "";

    return gsap.to({}, {
        duration: chars.length * speed,
        onUpdate: function () {
            const progress = Math.floor(this.progress() * chars.length);
            element.textContent = chars.slice(0, progress).join("");
        },
    });
};

/**
 * Hover animation utility
 * @param {string|HTMLElement} target - Element to animate
 * @param {object} hoverProps - Animation properties on hover
 * @param {object} leaveProps - Animation properties on leave
 */
export const hoverAnimation = (target, hoverProps, leaveProps = {}) => {
    const element = typeof target === "string" ? document.querySelector(target) : target;

    if (!element) return;

    element.addEventListener("mouseenter", () => {
        gsap.to(element, { ...hoverProps, duration: 0.3, ease: "power2.out" });
    });

    element.addEventListener("mouseleave", () => {
        gsap.to(element, { ...leaveProps, duration: 0.3, ease: "power2.out" });
    });
};

/**
 * Refresh ScrollTrigger (call after dynamic content changes)
 */
export const refreshScrollTrigger = () => {
    ScrollTrigger.refresh();
};

/**
 * Kill all ScrollTriggers (cleanup)
 */
export const killScrollTriggers = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export default gsap;
