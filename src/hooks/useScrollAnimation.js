// Aim: Custom hook for scroll-based animations with GSAP

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered animations
 * @param {object} animationConfig - GSAP animation configuration
 * @param {object} scrollTriggerConfig - ScrollTrigger configuration
 * @param {array} dependencies - Dependency array for re-running effect
 */
export const useScrollAnimation = (
    animationConfig = {},
    scrollTriggerConfig = {},
    dependencies = []
) => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(elementRef.current, {
                ...animationConfig,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                    ...scrollTriggerConfig,
                },
            });
        });

        return () => ctx.revert(); // Cleanup
    }, dependencies);

    return elementRef;
};

/**
 * Custom hook for staggered animations on children
 * @param {object} animationConfig - GSAP animation configuration
 * @param {number} staggerDelay - Delay between each child animation
 * @param {string} childSelector - CSS selector for children (default: "> *")
 */
export const useStaggerAnimation = (
    animationConfig = {},
    staggerDelay = 0.1,
    childSelector = "> *"
) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const children = containerRef.current.querySelectorAll(childSelector);

        const ctx = gsap.context(() => {
            gsap.from(children, {
                ...animationConfig,
                stagger: staggerDelay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return containerRef;
};

/**
 * Custom hook for timeline-based animations
 * @param {function} timelineBuilder - Function that builds the timeline
 * @param {array} dependencies - Dependency array
 */
export const useTimeline = (timelineBuilder, dependencies = []) => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.8 },
        });

        timelineBuilder(tl);
        timelineRef.current = tl;

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, dependencies);

    return timelineRef;
};

export default useScrollAnimation;
