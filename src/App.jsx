import { useState, useEffect } from 'react';

export default function App() {
  const [pos, setPos] = useState({ top: 100, left: 100 });
  const [score, setScore] = useState(0);

  const moveDog = () => {
    const top = Math.random() * (window.innerHeight - 150);
    const left = Math.random() * (window.innerWidth - 150);
    setPos({ top, left });
    setScore(prev => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setPos({ top: 100, left: 100 });
      setScore(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-yellow-100 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-2xl font-bold text-gray-700">
        Score: {score}
      </div>
      <img
        src="https://placedog.net/150"
        alt="dog"
        className="absolute cursor-pointer transition-all duration-200"
        style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
        onClick={moveDog}
      />
    </div>
  );
}
