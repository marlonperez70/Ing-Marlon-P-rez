"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const generateRandomData = () => Math.random().toString(16).slice(2, 10).toUpperCase();

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [telemetry, setTelemetry] = useState({ cpu: "24%", ram: "4.2GB", net: "STABLE" });

    useEffect(() => {
        setIsMounted(true);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 2000);
                    return 100;
                }
                return prev + 1;
            });
            // Update random telemetry
            if (Math.random() > 0.8) {
                setTelemetry({
                    cpu: `${Math.floor(Math.random() * 40 + 20)}%`,
                    ram: `${(Math.random() * 2 + 4).toFixed(1)}GB`,
                    net: Math.random() > 0.1 ? "ENCRYPTED" : "RECOGNIZING"
                });
            }
        }, 40);
        return () => clearInterval(interval);
    }, [onComplete]);

    if (!isMounted) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#010812] flex items-center justify-center overflow-hidden font-michroma text-[#00e5ff]"
        >
            {/* 1. HEXAGONAL GRID BACKGROUND */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 69.28 0 51.96V17.32L30 0z' fill='none' stroke='%2300e5ff' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '60px 104px' }} />

            {/* 2. SCANLINES & VIGNETTE */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-50" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none z-50" />

            {/* 3. MAIN HUD LAYOUT */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
                
                {/* --- CENTRAL CORE (STARK ARC REACTOR STYLE) --- */}
                <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-75 md:scale-100">
                    
                    {/* Ring 1: Outer Dots */}
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full opacity-20">
                        <circle cx="300" cy="300" r="280" stroke="#00e5ff" strokeWidth="1" fill="none" strokeDasharray="2 12" />
                    </motion.svg>

                    {/* Ring 2: Major Ticks */}
                    <svg className="absolute w-full h-full opacity-40">
                        {[...Array(36)].map((_, i) => (
                            <line key={i} x1="300" y1="20" x2="300" y2="40" stroke="#00e5ff" strokeWidth="2" transform={`rotate(${i * 10} 300 300)`} />
                        ))}
                    </svg>

                    {/* Ring 3: Triple Segmented Anvil */}
                    <motion.svg animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] opacity-50">
                        <circle cx="240" cy="240" r="230" stroke="#00e5ff" strokeWidth="10" fill="none" strokeDasharray="100 140" />
                    </motion.svg>

                    {/* Ring 4: Inner Technical Ring */}
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-[60%] h-[60%]">
                        <circle cx="180" cy="180" r="170" stroke="#00e5ff" strokeWidth="2" fill="none" strokeDasharray="5 5" className="opacity-30" />
                        <circle cx="180" cy="180" r="160" stroke="#00e5ff" strokeWidth="15" fill="none" strokeDasharray="2 30" className="opacity-60" />
                    </motion.svg>

                    {/* Central Brand & Scanner */}
                    <div className="absolute flex flex-col items-center justify-center">
                        <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} className="relative">
                            <h1 className="text-3xl font-black tracking-[0.3em] text-white drop-shadow-[0_0_15px_#00e5ff] italic">
                                MARLON PÉREZ
                            </h1>
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent mt-2" />
                        </motion.div>
                        <p className="text-[10px] mt-4 tracking-[0.5em] text-[#00e5ff]/60 uppercase">System Status: {progress}%</p>
                    </div>

                    {/* Circular Progress Bar */}
                    <svg className="absolute w-[70%] h-[70%] -rotate-90">
                        <circle
                            cx="210" cy="210" r="200"
                            stroke="rgba(0, 229, 255, 0.1)" strokeWidth="4" fill="none"
                        />
                        <motion.circle
                            cx="210" cy="210" r="200"
                            stroke="#00e5ff" strokeWidth="4" fill="none"
                            strokeDasharray="1256"
                            initial={{ strokeDashoffset: 1256 }}
                            animate={{ strokeDashoffset: 1256 - (1256 * progress) / 100 }}
                            className="drop-shadow-[0_0_8px_#00e5ff]"
                        />
                    </svg>
                </div>

                {/* --- SIDEBAR MODULES (THE RAINMETER LOOK) --- */}
                
                {/* LEFT SIDEBAR: SYSTEM SPECS */}
                <div className="absolute left-10 top-1/4 space-y-12">
                    <div className="relative p-4 border-l-2 border-[#00e5ff]/40 bg-white/5 backdrop-blur-md">
                        <h3 className="text-[10px] text-[#00e5ff]/50 mb-4 tracking-widest uppercase">Bio-Metric Analysis</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end gap-8">
                                <span className="text-[9px] opacity-60">Neural Link:</span>
                                <span className="text-xs text-white">ESTABLISHED</span>
                            </div>
                            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div animate={{ x: [-128, 128] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                            </div>
                        </div>
                    </div>

                    <div className="relative p-4 border-l-2 border-[#00e5ff]/40 bg-white/5">
                        <h3 className="text-[10px] text-[#00e5ff]/50 mb-4 tracking-widest uppercase">System Telemetry</h3>
                        <div className="font-mono text-[10px] space-y-2 opacity-80">
                            <div className="flex justify-between gap-4"><span>CPU_CORE:</span> <span className="text-white">{telemetry.cpu}</span></div>
                            <div className="flex justify-between gap-4"><span>RAM_LOAD:</span> <span className="text-white">{telemetry.ram}</span></div>
                            <div className="flex justify-between gap-4"><span>NET_LINK:</span> <span className="text-white">{telemetry.net}</span></div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR: SATELLITE & GPS */}
                <div className="absolute right-10 bottom-1/4 space-y-12 text-right">
                    <div className="relative p-4 border-r-2 border-[#00e5ff]/40 bg-white/5">
                        <h3 className="text-[10px] text-[#00e5ff]/50 mb-4 tracking-widest uppercase">Location Services</h3>
                        <div className="font-mono text-[11px] space-y-1">
                            <div className="text-white">LAT: -2.897431</div>
                            <div className="text-white">LONG: -79.004521</div>
                            <div className="text-[9px] opacity-40">CUENCA_ECUADOR_NODE_01</div>
                        </div>
                    </div>

                    <div className="relative p-4 border-r-2 border-[#00e5ff]/40 bg-white/5 overflow-hidden">
                         <h3 className="text-[10px] text-[#00e5ff]/50 mb-2 tracking-widest uppercase">Frequency Spectrum</h3>
                         <div className="flex items-end gap-[2px] h-12">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                    className="w-[3px] bg-[#00e5ff]/60"
                                />
                            ))}
                         </div>
                    </div>
                </div>

                {/* BOTTOM WIDGET: DATA STREAM */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl">
                    <div className="flex justify-between text-[8px] opacity-30 font-mono mb-2 px-2">
                        <span>DATA_STREAM_AUTH_X88</span>
                        <span>{generateRandomData()} // {generateRandomData()}</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative">
                        <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            className="h-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" 
                        />
                    </div>
                </div>

            </div>

            {/* OVERLAY CORNER TEXTS */}
            <div className="absolute top-10 left-10 text-[9px] opacity-40 leading-relaxed uppercase tracking-widest">
                Stark Industries // Jarvis OS<br/>
                Unauthorized access prohibited
            </div>
            
            <div className="absolute top-10 right-10 text-[9px] opacity-40 text-right leading-relaxed uppercase tracking-widest">
                Protocol: MK_42_INIT<br/>
                Shield Level: 100%
            </div>

        </motion.div>
    );
}
