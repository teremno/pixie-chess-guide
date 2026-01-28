import React from 'react';

const ChessBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Chessboard Pattern Layer */}
            <div
                className="absolute inset-0 animate-chess"
                style={{
                    backgroundImage: `
            linear-gradient(45deg, #080808 25%, transparent 25%, transparent 75%, #080808 75%, #080808),
            linear-gradient(45deg, #080808 25%, transparent 25%, transparent 75%, #080808 75%, #080808)
          `,
                    backgroundSize: `calc(var(--square-size) * 2) calc(var(--square-size) * 2)`,
                    backgroundColor: '#040404',
                    opacity: 0.6
                }}
            />

            {/* Magical Purple Tint Layer */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `
            radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(88, 28, 135, 0.08) 0%, transparent 40%)
          `
                }}
            />

            {/* Vignette Overlay (Darkening edges) */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.6) 100%)'
                }}
            />
        </div>
    );
};

export default ChessBackground;
