import React, { useRef, useState, useEffect } from 'react';

function ColoringGame(){
    const canvasRef = useRef(null);
    const [currentColor, setCurrentColor] = useState('#FF5733');

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 600;
        canvas.height = 400;

        const draw = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ctx.fillStyle = currentColor;
            ctx.fillRect(x, y, 10, 10);
        };

        const handleMouseDown = () => {
            canvas.addEventListener('mousemove', draw);
        };

        const handleMouseUp = () => {
            canvas.removeEventListener('mousemove', draw);
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, [currentColor]);

    const handleColorChange = (e) => {
        setCurrentColor(e.target.value);
    };

    const saveImage = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = 'colored-artwork.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    return (
        <div className="coloring-game">
            <h2>Draw Something</h2>
            <canvas ref={canvasRef} className='radius-full' id="coloringCanvas"></canvas>
            <div className="color-palette">
                <input className='radius-full no-border' type="color"  value={currentColor} onChange={handleColorChange} style={{backgroundColor: currentColor}} content='Choose Color'/>
            </div>
            <button className='padded radius-full no-border' onClick={saveImage}>
                Save Your Artwork
            </button>
        </div>
    );
};

export default ColoringGame;
