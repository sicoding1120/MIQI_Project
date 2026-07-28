import { memo } from "react"

// Pure CSS animations — zero JavaScript, zero React re-renders, GPU-accelerated
const styles = `
@keyframes geo-triangle { 
  0% { transform: rotateZ(0deg) translateY(-15px); }
  50% { transform: rotateZ(180deg) translateY(15px); }
  100% { transform: rotateZ(360deg) translateY(-15px); }
}
@keyframes geo-square { 
  0% { transform: rotateZ(360deg) translateX(-15px); }
  50% { transform: rotateZ(180deg) translateX(15px); }
  100% { transform: rotateZ(0deg) translateX(-15px); }
}
@keyframes geo-circle { 
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-25px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
}
@keyframes geo-hexagon { 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes geo-semicircle { 
  0% { transform: rotateZ(-20deg) translateX(0); }
  50% { transform: rotateZ(20deg) translateX(-20px); }
  100% { transform: rotateZ(-20deg) translateX(0); }
}
`

export const GeometricDecorations = memo(function GeometricDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <style>{styles}</style>
      
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Solid Orange Triangle */}
      <svg 
        style={{ animation: 'geo-triangle 25s linear infinite', willChange: 'transform' }}
        className="absolute top-[10%] left-[8%] w-24 h-24 text-orange-500/30" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
      >
        <polygon points="50,15 90,85 10,85" />
      </svg>

      {/* Solid Blue Square */}
      <svg 
        style={{ animation: 'geo-square 30s linear infinite', willChange: 'transform' }}
        className="absolute bottom-[15%] right-[10%] w-28 h-28 text-blue-500/30" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
      >
        <rect x="25" y="25" width="50" height="50" />
      </svg>

      {/* Solid Yellow Circle */}
      <svg 
        style={{ animation: 'geo-circle 15s ease-in-out infinite', willChange: 'transform' }}
        className="absolute top-[35%] right-[15%] w-20 h-20 text-yellow-400/40" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
      >
        <circle cx="50" cy="50" r="35" />
      </svg>

      {/* Wireframe Green Hexagon */}
      <svg 
        style={{ animation: 'geo-hexagon 40s linear infinite', willChange: 'transform' }}
        className="absolute bottom-[40%] left-[5%] w-32 h-32 text-green-500/25" 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3"
      >
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
      </svg>
      
      {/* Solid Pink Half-Circle */}
      <svg 
        style={{ animation: 'geo-semicircle 12s ease-in-out infinite', willChange: 'transform' }}
        className="absolute top-[60%] left-[40%] w-16 h-16 text-pink-500/30" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
      >
        <path d="M 10,50 A 40,40 0 0,1 90,50 Z" />
      </svg>
    </div>
  )
})
