"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 80;

function getFrameSrc(index: number) {
  return `/frames/frame-${String(index).padStart(3, "0")}.jpg`;
}

export default function FrameAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number>(0);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete) return;

    // Set canvas size to match image (only once)
    if (canvas.width !== img.naturalWidth) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        // Draw first frame as soon as it's loaded
        if (i === 1 && currentFrameRef.current === -1) {
          currentFrameRef.current = 0;
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const wrapper = document.getElementById("hero-scroll-wrapper");
        if (!wrapper) return;

        const rect = wrapper.getBoundingClientRect();
        const scrollableHeight = wrapper.offsetHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;

        const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1);
        const frameIndex = Math.min(
          Math.floor(progress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial draw

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto block"
      style={{ aspectRatio: "16/9" }}
    />
  );
}
