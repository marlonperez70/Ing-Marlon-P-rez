"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Terminal, Shield, Globe, Activity, Cpu, Lock, Wifi } from "lucide-react";

// --- COMPONENTE: MARCO TÁCTICO (Fidelity based on your image) ---
const TacticalFrame = ({ title, children, className, accent = "cyan" }: any) => {
  const colors: any = {
    cyan: "border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5",
    violet: "border-[#A855F7] text-[#A855F7] bg-[#A855F7]/5",
    green: "border-[#00FF88] text-[#00FF88] bg-[#00FF88]/5",
  };

  return (
    <div className={`relative border-l border-t ${colors[accent]} ${className}`}>
      {/* Corner Accents */}
      <div className={`absolute top-0 right-0 w-4 h-1 ${accent === 'cyan' ? 'bg-[#00E5FF]' : 'bg-[#A855F7]'}`} />
      <div className={`absolute bottom-0 left-0 w-1 h-4 ${accent === 'cyan' ? 'bg-[#00E5FF]' : 'bg-[#A855F7]'}`} />
      
      {/* Header Tab */}
      <div className={`absolute -top-6 left-0 px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em] border-t border-r ${colors[accent]} bg-[#020408]`}>
        {title}
      </div>

      <div className="p-4 h-full">
        {children}
      </div>
    </div>
  );
};

export function TacticalHUD() {
  const [isMounted, setIsMounted] = useState(false);
  const [dataStream, setDataStream] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Simulation of data stream
    const interval = setInterval(() => {
      setDataStream(prev => [
        `0x${Math.random().toString(16).slice(2, 10).toUpperCase()}_LOG_INIT`,
        ...prev
      ].slice(0, 8));
    }, 1500);

    // Canvas Background (Technical Grid)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const drawGrid = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = "rgba(0, 229, 255, 0.03)";
          ctx.lineWidth = 0.5;
          for (let i = 0; i < canvas.width; i += 40) {
            ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
          }
          for (let i = 0; i < canvas.height; i += 40) {
            ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
          }
        };
        drawGrid();
      }
    }

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return <div className="absolute inset-0 bg-[#020408]" />;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#020408] font-mono">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* 1. TOP STATUS BAR (Identity) */}
      <div className="absolute top-0 left-0 w-full h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E5FF] animate-pulse" />
            <span className="text-[10px] font-bold text-white tracking-[0.3em]">ING. MARLON PÉREZ // MASTER_NODE</span>
          </div>
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="text-[8px] text-[#00E5FF]/60 uppercase">Security Level: 09 // Protocols: ACTIVE</span>
        </div>
        <div className="flex gap-6 text-[8px] text-white/40">
          <span>{new Date().toLocaleDateString()}</span>
          <span className="text-[#00FF88]">UPTIME: 99.9%</span>
        </div>
      </div>

      {/* 2. MAIN HUD COMPOSITION (Replicating high density) */}
      <div className="relative w-full h-full grid grid-cols-12 grid-rows-12 p-12 gap-8 pt-20">
        
        {/* --- LEFT: IP & CONTROL (Como en tu imagen) --- */}
        <div className="col-span-12 md:col-span-3 row-span-6 space-y-10">
          <TacticalFrame title="IP_CONTROL_MODULE" className="h-64">
            <div className="space-y-4">
              <div>
                <p className="text-[8px] opacity-40">TARGET_UP_LINK</p>
                <h2 className="text-2xl font-bold text-white tracking-tighter">934.554.32.3</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[8px] opacity-60">
                <div className="space-y-1">
                  <div>NODE_A: 104.22.1</div>
                  <div>NODE_B: 88.192.4</div>
                </div>
                <div className="bg-[#00E5FF]/10 p-2 border border-[#00E5FF]/20 text-center">
                  SCANNING...
                </div>
              </div>
              <div className="h-16 overflow-hidden">
                {dataStream.map((log, i) => (
                  <div key={i} className="text-[7px] text-[#00FF88]/60">{`> ${log}`}</div>
                ))}
              </div>
            </div>
          </TacticalFrame>

          <TacticalFrame title="CORE_DIAGNOSTICS" className="h-48" accent="violet">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Cpu className="w-4 h-4 opacity-40" />
                <span className="text-[10px] font-bold">IA_PROCESSING</span>
              </div>
              <div className="space-y-2">
                <div className="h-1 w-full bg-white/5"><motion.div animate={{ width: ["20%", "90%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-[#A855F7]" /></div>
                <div className="h-1 w-full bg-white/5"><motion.div animate={{ width: ["60%", "30%", "80%"] }} transition={{ duration: 6, repeat: Infinity }} className="h-full bg-[#00E5FF]" /></div>
              </div>
            </div>
          </TacticalFrame>
        </div>

        {/* --- CENTER: MAIN VISUAL (Radar/Targeting) --- */}
        <div className="col-span-12 md:col-span-6 row-span-8 flex items-center justify-center relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* SVG Target Reticle */}
            <svg viewBox="0 0 500 500" className="w-[400px] h-[400px] opacity-20">
              <circle cx="250" cy="250" r="240" stroke="#00E5FF" strokeWidth="0.5" fill="none" strokeDasharray="2 10" />
              <circle cx="250" cy="250" r="180" stroke="#00E5FF" strokeWidth="1" fill="none" strokeDasharray="100 20" />
              <path d="M250,50 L250,80 M250,420 L250,450 M50,250 L80,250 M420,250 L450,250" stroke="#00E5FF" strokeWidth="2" />
            </svg>
            
            {/* Pulsing Core */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-[40px]"
            />
            
            <div className="absolute text-center">
              <h1 className="text-4xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                MARLON_PÉREZ
              </h1>
              <p className="text-[10px] text-[#00E5FF] tracking-[0.5em] mt-2 font-bold uppercase">Authorized Systems Operator</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT: GEOLOCATION & NETWORK (Como en tu imagen) --- */}
        <div className="col-span-12 md:col-span-3 row-span-6 space-y-10">
          <TacticalFrame title="SATELLITE_UPLINK" className="h-64">
            <div className="relative h-32 w-full bg-black/40 border border-white/5 overflow-hidden mb-4">
              {/* Fake Map Grid */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00E5FF 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
              <motion.div 
                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-[#00FF88] rounded-full"
              />
              <div className="absolute bottom-2 right-2 text-[7px] text-[#00FF88]">LOC: -2.897 / -79.004</div>
            </div>
            <div className="space-y-2 text-[8px]">
              <div className="flex justify-between border-b border-white/5 pb-1"><span>SAT_ID:</span> <span className="text-white">X-88_MARS</span></div>
              <div className="flex justify-between border-b border-white/5 pb-1"><span>SIGNAL:</span> <span className="text-[#00FF88]">STRONG</span></div>
              <div className="flex justify-between"><span>LATENCY:</span> <span className="text-white">12ms</span></div>
            </div>
          </TacticalFrame>

          <TacticalFrame title="NETWORK_TRAFFIC" className="h-48" accent="green">
            <div className="flex items-end gap-1 h-24">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                  className="w-full bg-[#00FF88]/40"
                />
              ))}
            </div>
            <p className="text-[8px] text-white/40 mt-4 uppercase">Data_Stream: SECURE_AES</p>
          </TacticalFrame>
        </div>

      </div>

      {/* 3. OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
    </div>
  );
}
