"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TOTAL_FRAMES = 20;
const FRAME_RATE = 100; // ms per frame (~10fps)

export default function FrameAnimation() {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const loadedCount = useRef(0);

  // Preload all frames
  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = `/frames/frame-${String(i).padStart(2, "0")}.jpg`;
      img.onload = () => {
        loadedCount.current++;
        if (loadedCount.current >= TOTAL_FRAMES) setLoaded(true);
      };
    }
  }, []);

  // Animate frames
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= TOTAL_FRAMES ? 1 : prev + 1));
    }, FRAME_RATE);
    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      {/* Show first frame as placeholder while loading */}
      {Array.from({ length: TOTAL_FRAMES }, (_, i) => i + 1).map((frame) => (
        <Image
          key={frame}
          src={`/frames/frame-${String(frame).padStart(2, "0")}.jpg`}
          alt="Loan facilitation animation"
          fill
          className={`object-cover transition-opacity duration-75 ${
            frame === currentFrame ? "opacity-100" : "opacity-0"
          }`}
          priority={frame <= 3}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}

      {/* Loading overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-900/30 backdrop-blur-sm">
          <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
