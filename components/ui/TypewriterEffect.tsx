"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface TypewriterEffectProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    showCursor?: boolean;
    onComplete?: () => void;
}

export function TypewriterEffect({
    text,
    className,
    speed = 50,
    delay = 0,
    showCursor = true,
    onComplete,
}: TypewriterEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(delayTimer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, speed);
            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
            onComplete?.();
        }
    }, [displayedText, text, speed, started, onComplete]);

    return (
        <span className={clsx("inline-block", className)}>
            {displayedText}
            {showCursor && !isComplete && (
                <motion.span
                    className="inline-block w-2 h-5 bg-[#00ff00] ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
            )}
            {showCursor && isComplete && (
                <motion.span
                    className="inline-block w-2 h-5 bg-[#00ff00] ml-1 align-middle cursor-blink"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
            )}
        </span>
    );
}

interface MultiLineTypewriterProps {
    lines: string[];
    className?: string;
    lineClassName?: string;
    speed?: number;
    lineDelay?: number;
}

export function MultiLineTypewriter({
    lines,
    className,
    lineClassName,
    speed = 30,
    lineDelay = 500,
}: MultiLineTypewriterProps) {
    const [currentLine, setCurrentLine] = useState(0);

    return (
        <div className={className}>
            {lines.map((line, index) => (
                <div key={index} className={lineClassName}>
                    {index < currentLine && <span>{line}</span>}
                    {index === currentLine && (
                        <TypewriterEffect
                            text={line}
                            speed={speed}
                            showCursor={index === lines.length - 1}
                            onComplete={() => {
                                setTimeout(() => {
                                    if (index < lines.length - 1) {
                                        setCurrentLine(index + 1);
                                    }
                                }, lineDelay);
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
