import React from 'react';

const ChessBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Base Background Color (Dark but not pure black) */}
            <div className="absolute inset-0 bg-[#020202]" />

            {/* Chessboard Pattern Layer */}
            <div
                className="absolute inset-0 animate-chess"
                style={{
                    backgroundImage: `
            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05)),
            linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05))
          `,
                    backgroundSize: `calc(var(--square-size) * 2) calc(var(--square-size) * 2)`,
                    opacity: 0.8
                }}
            />

            {/* Magical Purple Tint Layer (Enhanced) */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `
            radial-gradient(circle at 10% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.1) 0%, transparent 60%)
          `
                }}
            />

            {/* Vignette Overlay (Darkening edges) */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%)'
                }}
            />
        </div>
    );
};

export default ChessBackground;
