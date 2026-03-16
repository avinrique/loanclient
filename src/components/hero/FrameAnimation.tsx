"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 80;

function getFrameSrc(index: number) {
  return `/frames/frame-${String(index).padStart(3, "0")}.jpg`;
}

export default function FrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  }, []);

  useEffect(() => {
    // Preload all frames
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) drawFrame(0); // show first frame immediately
      };
      images.push(img);
    }
    imagesRef.current = images;

    // Scroll handler - maps scroll within the hero wrapper to frame index
    const handleScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        const wrapper = document.getElementById("hero-scroll-wrapper");
        if (!wrapper) return;

        const rect = wrapper.getBoundingClientRect();
        const wrapperHeight = wrapper.offsetHeight - window.innerHeight;
        // How far we've scrolled into the wrapper (0 to 1)
        const scrollProgress = Math.min(
          Math.max(-rect.top / wrapperHeight, 0),
          1
        );
        const frameIndex = Math.min(
          Math.floor(scrollProgress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-contain rounded-2xl"
      style={{ aspectRatio: "16/9" }}
    />
  );
}
