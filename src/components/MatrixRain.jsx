import { useEffect, useRef } from "react";

/* ── Characters that rain down ────────────────────────────── */
const CHARS =
  "01{}[]()=>const let var function return import export async await class new this null undefined true false if else for while switch case break continue typeof instanceof void delete yield";

const CHAR_POOL = CHARS.split(" ").join("").split("");

/* ── MatrixRain Canvas ────────────────────────────────────── */
function MatrixRain({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const FONT_SIZE = 14;
    let animId;

    // Column state
    let cols = 0;
    let drops = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / FONT_SIZE);
      // Preserve existing drops or initialise new ones
      const newDrops = Array.from({ length: cols }, (_, i) => drops[i] ?? Math.random() * -100);
      drops = newDrops;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // Subtle fade trail — slower fade in light mode so glyphs linger longer
      ctx.fillStyle = isDarkMode
        ? "rgba(0, 0, 0, 0.06)"
        : "rgba(249, 250, 251, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Glyph colour
      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;

      drops.forEach((y, i) => {
        const char = CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)];
        const x = i * FONT_SIZE;

        // Leading character is brighter
        const isLead = y * FONT_SIZE > 0 && Math.random() > 0.8;
        if (isDarkMode) {
          ctx.fillStyle = isLead ? "rgba(147,197,253,0.9)" : "rgba(59,130,246,0.25)";
        } else {
          ctx.fillStyle = isLead ? "rgba(29,78,216,0.75)" : "rgba(59,130,246,0.28)";
        }

        ctx.fillText(char, x, y * FONT_SIZE);

        // Reset drop randomly after it passes the bottom
        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5; // slow fall speed — subtle
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: isDarkMode ? 1 : 1 }}
    />
  );
}

export default MatrixRain;
