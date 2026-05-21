/**
 * Hero headline with CAT-CLAW SCRATCH MARKS — two decisive diagonal
 * swipes slashing across the headline area. Each swipe is a cluster of 4
 * close parallel near-straight lines (like claws dragged across paper).
 *
 * Draw + fade are CSS-driven (pathLength=1) so first paint matches the
 * animation — no hydration flash or GSAP on the critical path.
 */
export function ClawReveal() {
  return (
    <div className="claw-reveal relative w-full">
      <div className="relative z-10 text-center">
        <span className="block font-grotesk font-bold text-body text-hero leading-[0.9]">
          Enjoy the meal,
        </span>
        <span className="block font-grotesk italic font-medium text-accent text-hero leading-[0.9]">
          not the math.
        </span>
      </div>

      <svg
        className="claw-svg absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g className="swipe-1">
          <path
            className="claw-path"
            pathLength={1}
            d="M -20 10 Q 120 18, 280 40 T 600 120"
            stroke="rgb(255, 124, 97)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M -20 38 Q 120 46, 280 70 T 600 160"
            stroke="rgb(255, 124, 97)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M -20 68 Q 120 76, 280 102 T 600 200"
            stroke="rgb(255, 124, 97)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M -20 100 Q 120 108, 280 136 T 600 240"
            stroke="rgb(255, 124, 97)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>

        <g className="swipe-2">
          <path
            className="claw-path"
            pathLength={1}
            d="M 380 300 Q 560 320, 760 362 T 1030 428"
            stroke="rgb(255, 124, 97)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M 380 332 Q 560 354, 760 398 T 1030 466"
            stroke="rgb(255, 124, 97)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M 380 366 Q 560 390, 760 436 T 1030 506"
            stroke="rgb(255, 124, 97)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            className="claw-path"
            pathLength={1}
            d="M 380 402 Q 560 428, 760 476 T 1030 548"
            stroke="rgb(255, 124, 97)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>
      </svg>
    </div>
  );
}
