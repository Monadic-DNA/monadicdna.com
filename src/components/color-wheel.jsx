'use client'

export default function ColorWheel() {
  const centerX = 400
  const centerY = 400
  const radius = 200
  const angleStep = (2 * Math.PI) / 7
  
  const circlePositions = Array.from({ length: 7 }, (_, i) => ({
    x: centerX + radius * Math.sin(i * angleStep),
    y: centerY - radius * Math.cos(i * angleStep)
  }))

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#3B4B3B]">
      <svg 
        viewBox="0 0 800 800" 
        className="w-[600px] h-[600px]"
      >
        <defs>
          {circlePositions.map((pos, index) => (
            <filter key={`filter-${index}`} id={`paper-texture-${index}`} x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
              <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2" result="diffLight">
                <feDistantLight azimuth="45" elevation="60" />
              </feDiffuseLighting>
              <feComposite in="SourceGraphic" in2="diffLight" operator="arithmetic" k1="1" k2="0" k3="0.5" k4="0" />
            </filter>
          ))}

          {/* Pink/Red Pattern */}
          <pattern id="patternPinkRed" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(255, 182, 193, 0.4)" />
            <path d="M0,100 Q100,80 200,100 L200,200 L0,200 Z" fill="rgb(255, 69, 69, 0.4)" />
            <path d="M50,0 Q100,50 150,0" stroke="rgb(255, 228, 225, 0.4)" strokeWidth="30" fill="none" />
          </pattern>

          {/* Yellow Pattern */}
          <pattern id="patternYellow" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(255, 255, 0, 0.4)" />
            <path d="M0,0 Q100,50 200,0" fill="rgb(255, 255, 224, 0.4)" />
            <path d="M150,50 Q200,100 150,150" fill="rgb(255, 255, 180, 0.4)" />
          </pattern>

          {/* Green Pattern */}
          <pattern id="patternGreen" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(144, 238, 144, 0.4)" />
            <path d="M50,50 Q150,100 50,150" fill="rgb(200, 255, 200, 0.4)" />
            <path d="M0,100 Q100,150 200,100" fill="rgb(124, 218, 124, 0.4)" />
          </pattern>

          {/* Blue-Green Pattern */}
          <pattern id="patternBlueGreen" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(0, 206, 209, 0.4)" />
            <path d="M0,50 Q100,0 200,50" fill="rgb(224, 255, 255, 0.4)" />
            <path d="M100,100 Q150,150 100,200" fill="rgb(0, 186, 189, 0.4)" />
          </pattern>

          {/* Blue Pattern */}
          <pattern id="patternBlue" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(0, 0, 255, 0.4)" />
            <path d="M0,0 Q100,100 0,200" fill="rgb(173, 216, 230, 0.4)" />
            <path d="M100,0 Q200,100 100,200" fill="rgb(0, 0, 205, 0.4)" />
          </pattern>

          {/* Purple Pattern */}
          <pattern id="patternPurple" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(128, 0, 128, 0.4)" />
            <path d="M50,0 Q100,100 50,200" fill="rgb(230, 190, 255, 0.4)" />
            <path d="M150,0 Q100,100 150,200" fill="rgb(108, 0, 108, 0.4)" />
          </pattern>

          {/* Orange Pattern */}
          <pattern id="patternOrange" patternUnits="userSpaceOnUse" width="200" height="200">
            <rect width="200" height="200" fill="rgb(255, 140, 0, 0.4)" />
            <path d="M0,50 Q100,0 200,50" fill="rgb(255, 218, 185, 0.4)" />
            <path d="M50,100 Q100,150 150,100" fill="rgb(235, 120, 0, 0.4)" />
          </pattern>
        </defs>

        {circlePositions.map((pos, index) => {
          const patternName = ['PinkRed', 'Yellow', 'Green', 'BlueGreen', 'Blue', 'Purple', 'Orange'][index];
          return (
            <g key={index} transform={`rotate(${index * 360 / 7}, ${pos.x}, ${pos.y})`}>
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r={radius}
                fill={`url(#pattern${patternName})`}
                stroke="rgba(0, 0, 0, 0.2)" 
                strokeWidth="1"
              />
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r={radius}
                fill={`url(#pattern${patternName})`}
                filter={`url(#paper-texture-${index})`}
                style={{
                  mixBlendMode: 'multiply',
                  opacity: 0.7
                }}
              />
            </g>
          );
        })}
        
        {/* White Circles */}
        <circle 
          cx="370" 
          cy="415" 
          r="30" 
          fill="rgba(255, 255, 255, 0.7)" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />
        
        <circle 
          cx="430" 
          cy="415" 
          r="30" 
          fill="rgba(255, 255, 255, 0.7)" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />
        
        <circle 
          cx="400" 
          cy="370" 
          r="30" 
          fill="rgba(255, 255, 255, 0.7)" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />
        
        {/* Center Black Dot */}
        <circle 
          cx="400" 
          cy="400" 
          r="5" 
          fill="black" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />

        {/* Lines */}
        <line 
          x1="400" 
          y1="0" 
          x2="400" 
          y2="800" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />

        <line 
          x1="0" 
          y1="400" 
          x2="800" 
          y2="400" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />

        <line 
          x1="100" 
          y1="100" 
          x2="700" 
          y2="700" 
          stroke="rgba(0, 0, 0, 0.2)" 
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

