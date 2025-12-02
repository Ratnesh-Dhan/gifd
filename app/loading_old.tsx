'use client'    
export default function Loading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/30 via-transparent to-transparent animate-pulse" />
          <div 
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl"
            style={{ animation: 'spin 20s linear infinite' }}
          />
          <div 
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"
            style={{ animation: 'spin 15s linear infinite reverse' }}
          />
        </div>
  
        {/* Main loading container */}
        <div className="relative z-10 text-center space-y-8">
          {/* Spinning rings loader */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
            
            {/* Animated ring 1 */}
            <div 
              className="absolute inset-0 border-4 border-transparent border-t-white rounded-full"
              style={{ animation: 'spin 1s linear infinite' }}
            />
            
            {/* Animated ring 2 */}
            <div 
              className="absolute inset-2 border-4 border-transparent border-r-pink-300 rounded-full"
              style={{ animation: 'spin 1.5s linear infinite reverse' }}
            />
            
            {/* Animated ring 3 */}
            <div 
              className="absolute inset-4 border-4 border-transparent border-b-purple-300 rounded-full"
              style={{ animation: 'spin 2s linear infinite' }}
            />
            
            {/* Center glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-white to-pink-200 rounded-full blur-md animate-pulse" />
            <div className="absolute inset-10 bg-white rounded-full" />
          </div>
  
          {/* Loading text with gradient */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Loading
              <span className="inline-flex ml-1">
                <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
              </span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl font-medium">
              Preparing something amazing
            </p>
          </div>
  
          {/* Progress bar */}
          <div className="max-w-xs mx-auto">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-white via-pink-200 to-purple-200 rounded-full"
                style={{ 
                  animation: 'progress 2s ease-in-out infinite',
                  width: '100%'
                }}
              />
            </div>
          </div>
  
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${(i * 8.33)}%`,
                  animation: `float-particle ${2 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
  
        {/* Decorative glassmorphism cards */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 rotate-12 animate-pulse" />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 -rotate-12" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
  
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes float-particle {
            0%, 100% { 
              transform: translateY(100vh) translateX(0) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
              transform: translateY(90vh) translateX(10px) scale(1);
            }
            90% {
              opacity: 0.6;
              transform: translateY(10vh) translateX(-10px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(0) translateX(0) scale(0);
            }
          }
        `}</style>
      </div>
    );
  }